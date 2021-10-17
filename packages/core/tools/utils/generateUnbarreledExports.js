const { writeToFile } = require('../../../../tools/utils');
const {
  getWorkspacesInfo,
  getUnbarreledFileFullPath,
} = require('./subPackageUtils');

function generateUnbarreledExports() {
  const { pkgNames, purePkgNames } = getWorkspacesInfo();

  pkgNames.forEach((pkg, i) => {
    writeToFile(
      getUnbarreledFileFullPath(purePkgNames[i]),
      `export * from '${pkg}';\n`,
      {
        successMessage: `[@realsystem/core] Exports have been successfully updated within: ${pkg}`,
        errorMessage: `[@realsystem/core] Failed to update export within: ${pkg}`,
      }
    );
  });
}

module.exports = generateUnbarreledExports;
