const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../../tools/utils');
const { getUnbarreledFileFullPath } = require('./subPackageUtils');

const generateUnbarreledExports = async () => {
  const { pkgNames, purePkgNames } = await getWorkspacesInfo();

  logger.gray('Generating unbarreled exports');
  return pkgNames.forEach((pkg, i) => {
    writeToFile(
      getUnbarreledFileFullPath(purePkgNames[i]),
      `export * from '${pkg}';\n`,
      {
        successMessage: `[@real-system/core/${pkg}] Generated unbarreled exports.`,
        errorMessage: `[@real-system/core/${pkg}] Failed to generate exports.`,
      }
    );
  });
};

module.exports = generateUnbarreledExports;
