const { logger } = require('./logger');
const { env, isProduction } = require('./env');
const { getExternalDeps } = require('./getExternalDeps');
const { getFieldsFromPkgJson } = require('./getFieldsFromPkgJson');
const {
  calibratePackagePeerDepsVersions,
} = require('./calibratePackagePeerDepsVersions');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');

module.exports = {
  calibratePackagePeerDepsVersions,
  logger,
  env,
  isProduction,
  getExternalDeps,
  makeEsbuildConfig,
  getFieldsFromPkgJson,
};
