const esbuild = require('esbuild');
const { logger } = require('../utils');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');

/**
 * @function dev bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 * @todo update onrebuild in each package
 */
async function dev(packageJson) {
  const cjsConfig = makeEsbuildConfig(packageJson);
  const esmConfig = makeEsbuildConfig(packageJson, {
    format: 'esm',
  });

  logger.magenta(`Bundling ${packageJson.name}\n`);

  // bundle commonjs
  await esbuild
    .build(cjsConfig)
    .then(async () => logger.success(`Bundled CJS for "${packageJson.name}"`))
    .catch(() => process.exit(1));

  // bundle esmodule
  await esbuild
    .build(esmConfig)
    .then(async () => {
      logger.success(`Bundled ESM for "${packageJson.name}"\n`);
      logger.magenta('-------------------------------------------------- \n');
    })
    .catch(() => process.exit(1));
  return;
}

module.exports = dev;
