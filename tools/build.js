const esbuild = require('esbuild');
const { commandSync } = require('execa');
const { logger, getFieldsFromPkgJson, makeEsbuildConfig } = require('./utils');

/**
 * @function build bundle package for cjs and esm output
 */
async function build(packageJson) {
  // clean outdirectory
  commandSync('rimraf ./lib');

  const { outfile, ...pkgJson } = getFieldsFromPkgJson(packageJson);
  const cjsConfig = makeEsbuildConfig(pkgJson, {
    format: 'cjs',
    outfile: outfile.cjs,
  });

  const esmConfig = makeEsbuildConfig(pkgJson, {
    format: 'esm',
    outfile: outfile.esm,
  });

  logger.magenta(`Bundling ${pkgJson.name}\n`);

  // bundle commonjs
  await esbuild
    .build(cjsConfig)
    .then(async () => logger.success(`Bundled CJS for "${pkgJson.name}"`))
    .catch(() => process.exit(1));

  // bundle esmodule
  await esbuild
    .build(esmConfig)
    // eslint-disable-next-line no-unused-vars
    .then(async (result) => logger.success(`Bundled ESM for "${pkgJson.name}"`))
    .catch(() => process.exit(1));
  logger.gray(`Bundling types for "${pkgJson.name}"`);
  commandSync('yarn types');
  logger.success(`Types bundled for "${pkgJson.name}"\n`);
  logger.blue('-------------------------------------------------- \n');
}

module.exports = build;
