const esbuild = require('esbuild');
const { commandSync } = require('execa');
const { logger, getPkgJson, makeEsbuildConfig } = require('./utils');

/**
 * @function build bundle package for cjs and esm output
 */
async function build() {
  // clean outdirectory
  commandSync('rimraf ./lib');

  const { outfile, ...pkgJson } = getPkgJson();
  const cjsConfig = makeEsbuildConfig(pkgJson, {
    format: 'cjs',
    outfile: outfile.cjs,
  });

  const esmConfig = makeEsbuildConfig(pkgJson, {
    format: 'esm',
    outfile: outfile.esm,
  });

  // bundle commonjs
  await esbuild
    .build(cjsConfig)
    .then(async () => logger.green(`Bundled CJS for "${pkgJson.name}"!`))
    .catch(() => process.exit(1));

  // bundle esmodule
  await esbuild
    .build(esmConfig)
    // eslint-disable-next-line no-unused-vars
    .then(async (result) => logger.green(`Bundled ESM for "${pkgJson.name}"!`))
    .catch(() => process.exit(1));
  logger.yellow(`Generating types for "${pkgJson.name}"!`);
  commandSync('yarn types');
  logger.green(`Types generated for "${pkgJson.name}"!`);
}

build();
