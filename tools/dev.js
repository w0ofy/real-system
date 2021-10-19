const esbuild = require('esbuild');
const { logger, makeEsbuildConfig, getFieldsFromPkgJson } = require('./utils');

/**
 * @function dev bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 * @todo update onrebuild in each package
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

  logger.magenta(`Bundling ${pkgJson.name}\n`);

  // bundle commonjs
  esbuild
    .build(cjsConfig)
    .then(async () => logger.success(`Bundled CJS for "${pkgJson.name}"`))
    .catch(() => process.exit(1));

  // bundle esmodule
  esbuild
    .build(esmConfig)
    .then(async () => {
      logger.success(`Bundled ESM for "${pkgJson.name}"\n`);
      logger.blue('-------------------------------------------------- \n');
    })
    .catch(() => process.exit(1));
}

module.exports = dev;
