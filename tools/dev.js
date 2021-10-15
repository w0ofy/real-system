const esbuild = require('esbuild');
const { logger, getPkgJson, makeEsbuildConfig } = require('./utils');

/**
 * @function dev bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 */
function dev() {
  const { outfile, ...packageJson } = getPkgJson();
  const cjsConfig = makeEsbuildConfig(packageJson, {
    format: 'cjs',
    outfile: outfile.cjs,
  });
  const esmConfig = makeEsbuildConfig(packageJson, {
    format: 'esm',
    outfile: outfile.esm,
  });

  // bundle commonjs
  esbuild
    .build(cjsConfig)
    .then(async () => logger.green(`Bundled CJS for "${packageJson.name}"!`))
    .catch(() => process.exit(1));

  // bundle esmodule
  esbuild
    .build(esmConfig)
    .then(async () => logger.green(`Bundled ESM for "${packageJson.name}"!`))
    .catch(() => process.exit(1));
}

dev();
