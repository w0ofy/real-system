const { logger, ENV } = require('../utils');

// ESbuild config
const baseEsbuildConfig = {
  color: true,
  mainFields: ['module', 'main'],
  platform: 'node',
  bundle: true,
  target: ['es2015', 'chrome66', 'firefox58', 'safari11', 'edge79', 'node12'],
  minify: false,
  define: {
    'process.env.NODE_ENV': `"${ENV}"`,
  },
  logLevel: 'error',
  sourcemap: false,
};

const watch = (pkg = {}) => ({
  // eslint-disable-next-line no-unused-vars
  async onRebuild(err, _result) {
    if (err) logger.error(err);
    logger.info(`Rebundled ${pkg.name}`);
  },
});

const getExternalDeps = (packageJson = {}) => {
  const externalDeps = Object.keys({
    ...packageJson.peerDependencies,
  });
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

/**
 *
 * @param {object} customConfig
 * @param {object} pkgJson
 * @param {object} overrides {format: 'cjs' | 'esm'}
 * @returns {object}
 */
const makeEsbuildConfig = (pkgJson, { format } = { format: 'cjs' }) => {
  return {
    ...baseEsbuildConfig,
    entryPoints: [pkgJson['main:dev']],
    watch: watch(pkgJson),
    external: getExternalDeps(pkgJson),
    format,
    outfile: format === 'cjs' ? pkgJson.main : pkgJson.module,
  };
};

module.exports = {
  baseEsbuildConfig,
  makeEsbuildConfig,
};
