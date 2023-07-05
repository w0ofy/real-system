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
  const cjs = await esbuild.context(cjsConfig);
  await cjs
    .watch()
    .then(async () =>
      logger.success(`Bundled and watching CJS for "${packageJson.name}"`)
    )
    .catch(() => process.exit(1));

  // bundle esmodule
  const esm = await esbuild.context(esmConfig);
  await esm
    .watch()
    .then(async () => {
      logger.success(`Bundled and watching ESM for "${packageJson.name}"\n`);
      logger.magenta('-------------------------------------------------- \n');
    })
    .catch(() => process.exit(1));
  esm.return;
}

module.exports = {
  dev,
};
