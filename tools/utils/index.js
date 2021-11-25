const { logger, makeNewLine } = require('./logger');
const {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  CORE_PATH,
  ROOT_PATH,
} = require('./env');
const { getExternalDeps } = require('./getExternalDeps');
const { writeToFile } = require('./writeToFile');
const { getWorkspacesInfo } = require('./workspaceUtils');
const { updatePackageCache } = require('./updatePackageCache');

module.exports = {
  writeToFile,
  logger,
  makeNewLine,
  ENV,
  isProduction,
  getExternalDeps,
  BUNDLE_OUTPUT_DIR,
  getWorkspacesInfo,
  updatePackageCache,
  CORE_PATH,
  ROOT_PATH,
};
