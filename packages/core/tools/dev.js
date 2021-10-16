const esbuild = require('esbuild');
const {
  logger,
  getPkgJson,
  makeEsbuildConfig,
} = require('../../../../tools/utils');

/**
 * @function generateCoreBundle bundle core package for cjs and esm output
 */
async function generateCoreBundle() {
  const { outfile, ...pkgJson } = getPkgJson();
  const cjsConfig = makeEsbuildConfig(pkgJson, {
    format: 'cjs',
    outfile: outfile.cjs,
  });

  // bundle commonjs
  return await esbuild
    .build(cjsConfig)
    .then(async () => logger.green(`Bundled CJS for "${pkgJson.name}"!`))
    .catch(() => process.exit(1));
}

module.exports = generateCoreBundle;
