const { ENV } = require('../utils');

// ESbuild config
const baseEsbuildConfig = {
  color: true,
  mainFields: ['module', 'main'],
  platform: 'node',
  bundle: true,
  target: [
    'es2015',
    'chrome100',
    'firefox100',
    'safari14',
    'edge100',
    'node18.16.0',
  ],
  minify: false,
  define: {
    'process.env.NODE_ENV': `"${ENV}"`,
  },
  logLevel: 'error',
  sourcemap: true,
};

const getExternalDeps = (packageJson = {}) => {
  const externalDeps = Object.keys({
    ...packageJson.peerDependencies,
  });
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

/**
 * @param {object} pkgJson
 * @param {object} overrides {format: 'cjs' | 'esm'}
 * @returns {object}
 */
const makeEsbuildConfig = (pkgJson, { format } = { format: 'cjs' }) => {
  return {
    ...baseEsbuildConfig,
    entryPoints: [pkgJson['main']],
    external: getExternalDeps(pkgJson),
    format,
    outfile: format === 'cjs' ? pkgJson.main : pkgJson.module,
  };
};

module.exports = {
  baseEsbuildConfig,
  makeEsbuildConfig,
};
