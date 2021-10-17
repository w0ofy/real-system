const { logger } = require('./logger');
const { env, isProduction } = require('./env');
const { getExternalDeps } = require('./getExternalDeps');
const { getFieldsFromPkgJson } = require('./getFieldsFromPkgJson');
const { writeToFile } = require('./writeToFile');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');

module.exports = {
  writeToFile,
  logger,
  env,
  isProduction,
  getExternalDeps,
  makeEsbuildConfig,
  getFieldsFromPkgJson,
};
