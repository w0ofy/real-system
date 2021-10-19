/* eslint-disable no-unused-vars */
const fs = require('fs');
const { logger, writeToFile } = require('../../../../tools/utils');
const { CORE_LIBRARIES } = require('./constants');
const { getWorkspacesInfo } = require('./subPackageUtils');

const getPackageJsonLocation = (pkg) => {
  const pathToPackagesDirectory = `${__dirname}/../../..`;
  const pathToPackageJson = `${pkg}/package.json`;
  if (CORE_LIBRARIES.includes(pkg)) {
    return `${pathToPackagesDirectory}/libraries/${pathToPackageJson}`;
  }
  return `${pathToPackagesDirectory}/${pathToPackageJson}`;
};

/**
 * @todo refactor to use lerna / yarn commands
 */
const writePkgJson = async (pkg) => {
  const packageJson = require(getPackageJsonLocation(pkg));
  const pkgJson = {
    name: packageJson.name,
    version: packageJson.version,
    private: true,
    sideEffects: false,
    main: `../lib/${pkg}.js`,
    types: `../lib/${pkg}.d.ts`,
  };

  const dir = `../core/${pkg}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  writeToFile(`${dir}/package.json`, pkgJson, {
    successMessage: `[@realsystem/core/${pkg}]: Generated "package.json".`,
    errorMessage: `[@realsystem/core/${pkg}]: Failed to generate "package.json".`,
    formatJson: true,
  });
};

/**
 * @function generatePkgJson bundle esm & cjs package for unbarreled exports
 */
function generatePkgJson() {
  const { pkgList } = getWorkspacesInfo();

  logger.gray("Generating package.json's for unbarreled exports");
  return pkgList.forEach((pkg) => {
    const pureName = pkg.pureName;
    writePkgJson(pureName);
  });
}

module.exports = generatePkgJson;
