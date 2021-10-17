const { writeToFile } = require('../../../../tools/utils');
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
  writeToFile(CORE_BUNDLE_INDEX_PATH, getIndexOutput(), {
    successMessage: `[@realsystem/core] Exports have been successfully updated within: ${CORE_BUNDLE_INDEX_PATH}`,
    errorMessage: `[@realsystem/core] Failed to update exports within: ${CORE_BUNDLE_INDEX_PATH}`,
  });
}

module.exports = generateIndex;
