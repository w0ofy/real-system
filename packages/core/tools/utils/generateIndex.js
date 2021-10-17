const fs = require('fs');
const { logger } = require('../../../../tools/utils');
const { getWorkspacesInfo } = require('./subPackageUtils');
const { CORE_BUNDLE_INDEX_PATH } = require('./constants');

// Given a list of packages, output the index.tsx exports string
function getIndexOutput() {
  const { pkgNames } = getWorkspacesInfo();
  let output = '';
  pkgNames.forEach((pkg) => {
    output = `${output}export * from '${pkg}';\n`;
  });
  return output;
}

function generateIndex() {
  fs.writeFile(CORE_BUNDLE_INDEX_PATH, getIndexOutput(), (err) =>
    err
      ? logger.error(err)
      : logger.success(
          `[@realsystem/core] Exports have been successfully updated within: ${CORE_BUNDLE_INDEX_PATH}`
        )
  );
}

module.exports = generateIndex;
