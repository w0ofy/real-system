/* eslint-disable no-unused-vars */
const fs = require('fs');
const { logger, readPackageJson } = require('../../../../tools/utils');
const { getWorkspacesInfo } = require('./subPackageUtils');

const writePkgJson = async (pkgName) => {
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
 * @function generatePkgJson bundle esm & cjs package for unbarreled exports
 */
async function generatePkgJson() {
  const { pkgList } = getWorkspacesInfo();

  for (let i = 0; i < pkgList.length; i++) {
    const pkg = pkgList[i];
    const pkgName = pkg.pureName;

    logger.magenta(`Generating ${pkg.name} \n`);
    await writePkgJson(pkgName);
    logger.green('Generated package.json \n');
    logger.blue('-------------------------------------------------- \n');
  }
}

module.exports = generatePkgJson;
