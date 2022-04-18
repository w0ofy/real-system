const fs = require('fs');
const { CACHE_FILE_PATH } = require('./constants');

if (!fs.existsSync(CACHE_FILE_PATH)) {
  throw new Error(
    `[Jest resolver]: The "/.jest/.cache/packages.json" file does not exist.  Please run "yarn pre-test"`
  );
}

const cachedPackages = require(CACHE_FILE_PATH);

/**
 * shape:
 * {
 *   '@real-system/button': {
 *     name: '@real-system/button',
 *     version: '0.1.2',
 *     private: false,
 *     location: '/Users/username/system/packages/button/lib/index.js'
 *   }
 * }
 */
const keyedPackages = cachedPackages.reduce((acc, currentPackage) => {
  const packageJson = require(`${currentPackage.location}/package.json`);

  // If there's no main entrypoint, don't update the location path
  if (packageJson['main:dev'] == null) {
    acc[currentPackage.name] = currentPackage;
  } else {
    // Make sure to set the location to the lib/main entrypoint
    acc[currentPackage.name] = {
      ...currentPackage,
      location: `${currentPackage.location}/${packageJson['main:dev']}`,
    };
  }
  return acc;
}, {});

// Given "@real-system/button/lib/index.js"
// Returns ["@real-system", "button", "lib/index.js"]
const getPackageParts = (package) => {
  const [packageScope, packageName, ...packagePath] = package.split('/');
  return [packageScope, packageName, packagePath.join('/')];
};

/**
 * We're creating our own module resolver for jest because it is having a
 * very hard time finding our monorepo packages.  When we import a `@real-system`
 * package we use our own module resolution, otherwise we use the default
 * node one.
 *
 * @param {string} package
 * @param {*} details
 */
function customResolver(package, details) {
  if (package.includes('@real-system/')) {
    const [packageScope, packageName, packagePath] = getPackageParts(package);

    // if entry-point/location is specified in package import
    if (packagePath.length > 0) {
      // Get the cached location of this package's "main" entrypoint (from packageJson)
      const keyedLocation =
        keyedPackages[`${packageScope}/${packageName}`].location;

      // Get the package's root dir
      const baseKeyedLocation = keyedLocation.substring(
        0,
        keyedLocation.indexOf(packageName) + packageName.length
      );

      // Do we need to add the extension
      const extension = packagePath.includes('.js') ? '' : '.js';

      return `${baseKeyedLocation}/${packagePath}${extension}`;
    }

    // use the default package location
    return keyedPackages[package].location;
  }

  return details.defaultResolver(package, details);
}

module.exports = customResolver;
