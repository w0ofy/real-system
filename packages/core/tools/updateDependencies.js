const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../tools/utils');
const { CORE_PACKAGE_JSON_PATH } = require('./utils/constants');

// Given a list of packages, output the index.tsx exports string
const getPackageJsonOutput = async () => {
  const { coreDependencies } = await getWorkspacesInfo();
  const pkgJson = require(CORE_PACKAGE_JSON_PATH);
  pkgJson.dependencies = coreDependencies;
  return pkgJson;
};

(async function updateDependencies() {
  logger.gray('\nUpdating core package dependencies');
  const packageJsonOutput = await getPackageJsonOutput();

  await writeToFile(CORE_PACKAGE_JSON_PATH, packageJsonOutput, {
    formatJson: true,
    successMessage: '[@real-system/core] Updated core package deps.',
    errorMessage: '[@real-system/core] Failed to update core package deps.',
  });
})();
