const { logger } = require('../utils');

const convertBytes = function (bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  if (bytes == 0) {
    return 'n/a';
  }

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

  if (i == 0) {
    return bytes + sizes[i];
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + sizes[i];
};

const analyzeBundle = (result, outFile, format) => {
  const size = JSON.stringify(result.metafile.outputs[outFile].bytes);
  logger.magenta(`${format}: ${convertBytes(size)}`);
};

const getExternalsFromPeerDeps = (peerDeps = {}) => {
  const externalDeps = Object.keys(peerDeps);
  return [...externalDeps];
};

const preventIdentifierMinification = {
  minifyWhitespace: true,
  minifyIdentifiers: false,
  minifySyntax: true,
};

// ESbuild config
const makeEsbuildConfig =
  (entryPoints, external) =>
  (strictMinify = false) => ({
    color: true,
    metafile: true,
    entryPoints,
    /** From docs:
     * The main fields setting is set to main,module. This means tree shaking
     * will likely not happen for packages that provide both module and main
     * since tree shaking works with ECMAScript modules but not with CommonJS
     * modules.
     * Unfortunately some packages incorrectly treat module as meaning
     * "browser code" instead of "ECMAScript module code" so this default
     * behavior is required for compatibility. You can manually configure the
     * main fields setting to module,main if you want to enable tree shaking
     * and know it is safe to do so.
     */
    minify: true,
    ...(strictMinify ? preventIdentifierMinification : {}),
    mainFields: ['module', 'main'],
    // Fixes issues related to SSR (website builds)
    platform: 'node',
    bundle: true,
    // Sets the target environment so the code is changed into a format that
    // works  with node12 and the listed browsers
    target: [
      'es2015',
      'chrome100',
      'firefox100',
      'safari14',
      'edge100',
      'node18.16.0',
    ],
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    external,
  });

module.exports = {
  makeEsbuildConfig,
  analyzeBundle,
  getExternalsFromPeerDeps,
};
