/* eslint-disable no-unused-vars */
const fs = require('fs');
const {
  logger,
  writeToFile,
  getWorkspacesInfo,
} = require('../../../../tools/utils');

/**
 * @todo refactor to use yarn commands? maybe?
 */
const writePkgJson = async (pkg) => {
  const pkgJson = {
    name: `@real-system/${pkg}`,
    version: '0.0.0',
    private: true,
    sideEffects: false,
    main: `../lib/${pkg}.js`,
    types: `../lib/${pkg}.d.ts`,
  };

  const dir = `${__dirname}/../../${pkg}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return await writeToFile(`${dir}/package.json`, pkgJson, {
    successMessage: `[@real-system/core/${pkg}]: Generated "package.json".`,
    errorMessage: `[@real-system/core/${pkg}]: Failed to generate "package.json".`,
    formatJson: true,
  });
};

/**
 * @function generatePkgJson bundle esm & cjs package for unbarreled exports
 */
const generatePkgJson = async () => {
  const { pkgList } = await getWorkspacesInfo({ hasProdStatus: true });

  logger.gray("\nGenerating package.json's for unbarreled exports");
  return pkgList.forEach(async (pkg, i) => {
    const pureName = pkg.pureName;
    await writePkgJson(pureName);
  });
};

module.exports = generatePkgJson;
