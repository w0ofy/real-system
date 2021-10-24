const { getExternalDeps } = require('./getExternalDeps');
const { ENV, isProduction } = require('./env');
const { logger } = require('./logger');
const { commandSync } = require('execa');

// ESbuild config
const baseEsbuildConfig = {
  color: true,
  mainFields: ['module', 'main'],
  platform: 'node',
  bundle: true,
  // Changes code to fit given target environments
  target: ['chrome58', 'firefox57', 'safari11', 'edge18', 'node12'],
  minify: isProduction,
  define: {
    'process.env.NODE_ENV': `"${ENV}"`,
  },
  // inject: [`${__dirname}/reactShim.js`],
  logLevel: 'error',
  sourcemap: !isProduction,
};

const shouldWatch = (pkg = {}) =>
  !isProduction
    ? {
        // eslint-disable-next-line no-unused-vars
        onRebuild(err, _result) {
          if (err) logger.error(err);
          commandSync('yarn types');
          logger.blue(`Rebundled ${pkg.name}.`);
        },
      }
    : false;

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
