const esbuild = require('esbuild');
const { logger } = require('../utils');
const { EsmExternalsPlugin } = require('./plugins/EsmExternals');
const {
  analyzeBundle,
  makeEsbuildConfig,
  getExternalsFromPeerDeps,
} = require('./utils');

async function build(packageJson) {
  const {
    name: packageName,
    main: outFileCJS,
    module: outFileESM,
  } = packageJson;

  const external = getExternalsFromPeerDeps(packageJson.peerDependencies);
  const setConfig = makeEsbuildConfig([packageJson['main:dev']], external);
  /**
   * @todo still need this?
   * Fixes a bug related to replacing require with import statements https://github.com/evanw/esbuild/issues/566
   */
  const plugins = [EsmExternalsPlugin({ externals: external })];

  logger.info('-------------------------');
  logger.job(packageName);

  /**
   * ---------------------
   *  Production bundles
   * ---------------------
   */
  const cjsResult = await esbuild
    .build({
      ...setConfig(true),
      format: 'cjs',
      outfile: outFileCJS,
      plugins,
    })
    .catch((error) => {
      logger.error(error);
      return process.exit(1);
    });

  analyzeBundle(cjsResult, outFileCJS, 'cjs');

  const esmResult = await esbuild
    .build({
      ...setConfig(true),
      format: 'esm',
      outfile: outFileESM,
      plugins,
    })
    .catch((error) => {
      logger.error(error);
      return process.exit(1);
    });

  analyzeBundle(esmResult, outFileESM, 'esm');

  /**
   * ---------------
   *  Debug bundles
   * ---------------
   */
  await esbuild
    .build({
      ...setConfig(false),
      format: 'cjs',
      outfile: outFileCJS.replace('.js', '.debug.js'),
    })
    .catch((error) => {
      logger.error(error);
      return process.exit(1);
    });

  await esbuild
    .build({
      ...setConfig(false),
      format: 'esm',
      outfile: outFileESM.replace('.es.js', '.debug.es.js'),
      plugins,
    })
    .catch((error) => {
      logger.error(error);
      return process.exit(1);
    });

  logger.info('-------------------------\n');
}

module.exports = { build };
