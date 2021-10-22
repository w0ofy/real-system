const esbuild = require('esbuild');
const { commandSync } = require('execa');
const { logger, makeEsbuildConfig, BUNDLE_OUTPUT_DIR } = require('./utils');

/**
 * @function build bundle package for cjs and esm output
 */
async function build(packageJson) {
  // clean outdirectory
  commandSync(`rimraf ./${BUNDLE_OUTPUT_DIR}`);

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
    // eslint-disable-next-line no-unused-vars
    .then(async (result) =>
      logger.success(`Bundled ESM for "${packageJson.name}"`)
    )
    .catch(() => process.exit(1));
}

module.exports = build;
