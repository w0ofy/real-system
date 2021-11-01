const { writeToFile, logger } = require('../../../tools/utils');
const { getWorkspacesInfo } = require('./utils/subPackageUtils');
const { CORE_PACKAGE_PATH } = require('./utils/constants');

// Given a list of packages, output the index.tsx exports string
const getPackageJsonOutput = () => {
  const { coreDependencies } = getWorkspacesInfo();
  const pkgJson = require(CORE_PACKAGE_PATH);
  pkgJson.dependencies = coreDependencies;
  return pkgJson;
};

(function updateDependencies() {
  logger.gray('Updating core package dependencies');
  return writeToFile(CORE_PACKAGE_PATH, getPackageJsonOutput(), {
    formatJson: true,
    successMessage: '[@real-system/core] Updated core package deps.',
    errorMessage: '[@real-system/core] Failed to update core package deps.',
  });
})();
