const { logger } = require('./logger');
const { ENV, isProduction, BUNDLE_OUTPUT_DIR } = require('./env');
const { getExternalDeps } = require('./getExternalDeps');
const { writeToFile } = require('./writeToFile');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');

module.exports = {
  writeToFile,
  logger,
  ENV,
  isProduction,
  getExternalDeps,
  makeEsbuildConfig,
  BUNDLE_OUTPUT_DIR,
};
