const { logger } = require('./logger');
const {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  CORE_PATH,
  ROOT_PATH,
} = require('./env');
const { getExternalDeps } = require('./getExternalDeps');
const { writeToFile } = require('./writeToFile');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');
const { getWorkspacesInfo } = require('./workspaceUtils');
const { updatePackageCache } = require('./updatePackageCache');

module.exports = {
  writeToFile,
  logger,
  ENV,
  isProduction,
  getExternalDeps,
  makeEsbuildConfig,
  BUNDLE_OUTPUT_DIR,
  getWorkspacesInfo,
  updatePackageCache,
  CORE_PATH,
  ROOT_PATH,
};
