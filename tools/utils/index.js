const { logger } = require('./logger');
const { env, isProduction } = require('./env');
const { getExternalDeps } = require('./getExternalDeps');
const { getPkgJson } = require('./getPkgJson');
const {
  calibratePackagePeerDepsVersions,
} = require('./calibratePackagePeerDepsVersions');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');
const { readPackageJson } = require('./readPackageJson');

module.exports = {
  calibratePackagePeerDepsVersions,
  logger,
  env,
  isProduction,
  getExternalDeps,
  getPkgJson,
  makeEsbuildConfig,
  readPackageJson,
};
