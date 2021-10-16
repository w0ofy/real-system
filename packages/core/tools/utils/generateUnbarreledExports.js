/* eslint-disable no-unused-vars */
const esbuild = require('esbuild');
const fs = require('fs');
const {
  logger,
  getPkgJson,
  makeEsbuildConfig,
  readPackageJson,
} = require('../../../../tools/utils');
const { getWorkspacesInfo } = require('./subPackageUtils');

const generatePkgJson = async (pkgName) => {
  process.chdir(`../${pkgName}`);
  const pkg = readPackageJson();
  const pkgJson = {
    name: pkg.name,
    version: pkg.version,
    private: true,
    sideEffects: false,
    main: `../lib/${pkgName}.js`,
    types: `../lib/${pkgName}.d.ts`,
  };

  let data = JSON.stringify(pkgJson, null, 2);
  const dir = `../core/${pkgName}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return await fs.writeFile(`${dir}/package.json`, data, () => {});
};

/**
 * @function generateUnbarreledExports bundle esm & cjs package for unbarreled exports
 */
async function generateUnbarreledExports() {
  const { pkgList } = getWorkspacesInfo();

  for (let i = 0; i < pkgList.length; i++) {
    const pkg = pkgList[i];
    const pkgDirectory = pkg.relativeLocationFromCore;
    const { outfile, ...pkgJson } = getPkgJson(pkgDirectory);
    const pkgName = pkg.pureName;

    const cjsConfig = makeEsbuildConfig(pkgJson, {
      format: 'cjs',
      outfile: `lib/${pkgName}.js`,
      entryPoints: [`src/${pkgName}.ts`],
    });

    logger.magenta(`Generating ${pkg.name} \n`);

    await esbuild
      .build(cjsConfig)
      .then(async () => {
        logger.green('Bundled CJS');
        await generatePkgJson(pkgName);
        logger.green('Generated package.json \n');
        logger.blue('-------------------------------------------------- \n');
      })
      .catch(() => process.exit(1));
  }
}

module.exports = generateUnbarreledExports;
