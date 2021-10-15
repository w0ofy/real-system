/* eslint-disable no-unused-vars */
const esbuild = require('esbuild');
const { readdirSync } = require('fs');
const {
  logger,
  getPkgJson,
  makeEsbuildConfig,
} = require('../../../tools/utils');
const {
  generateTypes,
  generatePkgJson,
} = require('./utils/unbarreledPackageUtils');

const getDirectories = () =>
  readdirSync('..', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => '../' + dirent.name)
    .filter((dir) => !dir.includes('core'));

/**
 * @function build bundle esm & cjs package for unbarreled exports
 */
(async function buildUnbarreledExports() {
  const pkgDirectories = getDirectories();

  for (let i = 0; i < pkgDirectories.length; i++) {
    const pkgDirectory = pkgDirectories[i];
    const { outfile, ...pkgJson } = getPkgJson(pkgDirectory);
    const esmConfig = makeEsbuildConfig(pkgJson, {
      format: 'esm',
      outfile: outfile.esm,
    });
    const cjsConfig = makeEsbuildConfig(pkgJson, {
      format: 'cjs',
      outfile: outfile.cjs,
    });

    logger.magenta(`Unbarreling ${pkgJson.name} \n`);

    await esbuild
      .build(cjsConfig)
      .then(() => {
        logger.green('Bundled CJS');
      })
      .catch(() => process.exit(1));
    await esbuild
      .build(esmConfig)
      .then(async () => {
        logger.green('Bundled ESM');
        logger.gray('Generating types...');
        await generateTypes(pkgDirectory, pkgJson.types);
        logger.green('Generated types');
        await generatePkgJson(pkgDirectory);
        logger.green('Generated package.json \n');
        logger.blue('-------------------------------------------------- \n');
      })
      .catch((err) => logger.error(err));
  }
})();
