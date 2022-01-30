const { logger, getExternalDeps, ENV } = require('../utils');

// ESbuild config
const baseEsbuildConfig = {
  color: true,
  mainFields: ['module', 'main'],
  platform: 'node',
  bundle: true,
  target: ['es2015', 'chrome60', 'firefox60', 'safari11', 'edge18', 'node12'],
  minify: false,
  define: {
    'process.env.NODE_ENV': `"${ENV}"`,
  },
  logLevel: 'error',
  sourcemap: false,
};

const shouldWatch = (pkg = {}) => ({
  // eslint-disable-next-line no-unused-vars
  async onRebuild(err, _result) {
    if (err) logger.error(err);
    logger.info(`Rebundled ${pkg.name}.`);
  },
});

/**
 *
 * @param {object} customConfig
 * @param {object} pkgJson
 * @param {object} overrides {format: 'cjs' | 'esm'}
 * @returns {object}
 */
const makeEsbuildConfig = (pkgJson, overrides = { format: 'cjs' }) => {
  getExternalDeps;
  return {
    ...baseEsbuildConfig,
    entryPoints: [pkgJson['main:dev']],
    watch: shouldWatch(pkgJson),
    external: getExternalDeps(pkgJson),
    format: 'cjs',
    outfile: overrides.format === 'cjs' ? pkgJson.main : pkgJson.module,
    ...overrides,
  };
};

module.exports = {
  baseEsbuildConfig,
  makeEsbuildConfig,
};
