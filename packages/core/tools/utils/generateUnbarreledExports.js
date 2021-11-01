const { writeToFile, logger } = require('../../../../tools/utils');
const {
  getWorkspacesInfo,
  getUnbarreledFileFullPath,
} = require('./subPackageUtils');

function generateUnbarreledExports() {
  const { pkgNames, purePkgNames } = getWorkspacesInfo();

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
}

module.exports = generateUnbarreledExports;
