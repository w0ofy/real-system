/**
 * Updates package.json files for each package in monorepo to properly sync
 * the version numbers accross peerDeps and devDeps since lerna does not do it.
 * See: https://github.com/lerna/lerna/pull/1187
 *
 * Until this bites us, we should automate this because not bumping peers has bit us.
 */
const { resolve } = require('path');
const { writeFile } = require('fs');
const { getRepoPackages } = require('./getRepoPackages');
const { logger } = require('./logger');

function writeToFile(
  filePath,
  content,
  { successMessage, errorMessage, formatJson = false }
) {
  const output = formatJson ? JSON.stringify(content, null, 2) : content;

  writeFile(filePath, output, 'utf8', (error) => {
    if (error) {
      if (errorMessage != null) {
        logger.error(errorMessage);
      }

      logger(error);
      return false;
    }
    if (successMessage != null) {
      logger.success(successMessage);
    }
  });
}

const isRealSystemDependency = (packageName) =>
  packageName.includes('@realsystem/');
const getRealSystemDependencyList = (dependencyObject) =>
  Object.keys(dependencyObject).filter(isRealSystemDependency);

async function updatePackagePeerDependencies(
  packageJsonPath,
  peerDepsList = [],
  packageJsonData,
  packagesList
) {
  const calibratedPeerDeps = {};
  peerDepsList.forEach((peerDepName) => {
    const latestVersion = `^${
      packagesList.find(({ name }) => name === peerDepName).version
    }`;
    const currentVersion = packageJsonData.peerDependencies[peerDepName];
    if (latestVersion !== currentVersion) {
      calibratedPeerDeps[peerDepName] = latestVersion;
    }
  });

  if (Object.keys(calibratedPeerDeps).length === 0) {
    return;
  }

  const newPackageJson = {
    ...packageJsonData,
    peerDependencies: {
      ...packageJsonData.peerDependencies,
      ...calibratedPeerDeps,
    },
  };

  // Formatted and with a new line at the end for prettier
  const newPackageJsonString = `${JSON.stringify(newPackageJson, null, 2)}\n`;

  // Write it to file
  writeToFile(packageJsonPath, newPackageJsonString, {
    successMessage: `[${
      packageJsonData.name
    }] Successfully updated ${JSON.stringify(calibratedPeerDeps)}`,
  });
}

async function calibratePackagePeerDepsVersions() {
  logger.success('Calibrating package peerDependencies...');

  // Use lerna to get all packages and their version info
  const packagesList = await getRepoPackages();

  packagesList.forEach(async (pkg) => {
    const PACKAGE_JSON_PATH = resolve(pkg.location, 'package.json');
    const packageJsonData = require(PACKAGE_JSON_PATH);

    // realsystem repos shouldnt be dependencies
    if (packageJsonData.dependencies != null) {
      const depsList = getRealSystemDependencyList(
        packageJsonData.dependencies
      );
      if (depsList.length > 0) {
        logger.error(
          `[Error] ${packageJsonData.name}: do not declare @realsystem packages as dependencies!`
        );
        throw new Error('Move deps to peerDeps and devDeps');
      }
    }

    if (packageJsonData.peerDependencies != null) {
      const peerDepsList = getRealSystemDependencyList(
        packageJsonData.peerDependencies
      );

      if (peerDepsList.length !== 0) {
        await updatePackagePeerDependencies(
          PACKAGE_JSON_PATH,
          peerDepsList,
          packageJsonData,
          packagesList
        );
      }
    }
  });

  return packagesList;
}

module.exports = { calibratePackagePeerDepsVersions };
