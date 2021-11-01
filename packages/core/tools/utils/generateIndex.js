const { writeToFile, logger } = require('../../../../tools/utils');
const { getWorkspacesInfo } = require('./subPackageUtils');
const { CORE_INDEX_PATH } = require('./constants');

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
  logger.gray('Generating index exports');
  return writeToFile(CORE_INDEX_PATH, getIndexOutput(), {
    successMessage: '[@real-system/core] Generated index exports.',
    errorMessage: '[@real-system/core] Failed to generate index exports.',
  });
}

module.exports = generateIndex;
