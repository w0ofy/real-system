/* eslint-disable no-unused-vars */
const fs = require('fs');
const { logger } = require('../../../../tools/utils');
const {
  getWorkspacesInfo,
  getUnbarreledFileFullPath,
} = require('./subPackageUtils');

function generateUnbarreledExports() {
  const { pkgNames, purePkgNames } = getWorkspacesInfo();

  pkgNames.forEach((pkg, i) => {
    fs.writeFile(
      getUnbarreledFileFullPath(purePkgNames[i]),
      `export * from '${pkg}';\n`,
      (err) =>
        err
          ? logger.error(err)
          : logger.success(
              `[@realsystem/core] Exports have been successfully updated within: ${pkg}`
            )
    );
  });
}

module.exports = generateUnbarreledExports;
