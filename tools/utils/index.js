const { logger, makeNewLine } = require('./logger');
const {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  CORE_PATH,
  ROOT_PATH,
  PACKAGE_STATUS_CONFIG,
  PRODUCTION,
  DEVELOPMENT,
  EXPERIMENTAL,
} = require('./env');
const { writeToFile } = require('./writeToFile');
const {
  getWorkspacesInfo,
  getFullPkgName,
  getPurePkgName,
} = require('./workspaceUtils');
const { updatePackageCache } = require('./updatePackageCache');
const { updateDependabotConfig } = require('./update-dependabot-config');

module.exports = {
  writeToFile,
  logger,
  makeNewLine,
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  getWorkspacesInfo,
  getFullPkgName,
  getPurePkgName,
  updatePackageCache,
  updateDependabotConfig,
  CORE_PATH,
  ROOT_PATH,
  PACKAGE_STATUS_CONFIG,
  PRODUCTION,
  DEVELOPMENT,
  EXPERIMENTAL,
};
