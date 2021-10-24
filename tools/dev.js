const esbuild = require('esbuild');
const { logger, makeEsbuildConfig } = require('./utils');

/**
 * @function dev bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 * @todo update onrebuild in each package
 */
function dev(packageJson) {
  const cjsConfig = makeEsbuildConfig(packageJson);
  const esmConfig = makeEsbuildConfig(packageJson, {
    format: 'esm',
  });

  logger.magenta(`Bundling ${packageJson.name}\n`);

  // bundle commonjs
  esbuild
    .build(cjsConfig)
    .then(async () => logger.success(`Bundled CJS for "${packageJson.name}"`))
    .catch(() => process.exit(1));

  // bundle esmodule
  esbuild
    .build(esmConfig)
    .then(async () => {
      logger.success(`Bundled ESM for "${packageJson.name}"\n`);
      logger.blue('-------------------------------------------------- \n');
    })
    .catch(() => process.exit(1));
}

module.exports = dev;
