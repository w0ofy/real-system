const esbuild = require('esbuild');
const { logger, makeEsbuildConfig, getFieldsFromPkgJson } = require('./utils');

/**
 * @function dev bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 */
function dev(packageJson) {
  const { outfile, ...pkgJson } = getFieldsFromPkgJson(packageJson);
  const cjsConfig = makeEsbuildConfig(pkgJson, {
    format: 'cjs',
    outfile: outfile.cjs,
  });
  const esmConfig = makeEsbuildConfig(pkgJson, {
    format: 'esm',
    outfile: outfile.esm,
  });

  // bundle commonjs
  esbuild
    .build(cjsConfig)
    .then(async () => logger.green(`Bundled CJS for "${pkgJson.name}"!`))
    .catch(() => process.exit(1));

  // bundle esmodule
  esbuild
    .build(esmConfig)
    .then(async () => logger.green(`Bundled ESM for "${pkgJson.name}"!`))
    .catch(() => process.exit(1));
}

module.exports = dev;
