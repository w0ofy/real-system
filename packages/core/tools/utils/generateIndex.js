const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../../tools/utils');
const { CORE_INDEX_PATH } = require('./constants');

// Given a list of packages, output the index.tsx exports string
const getIndexOutput = async () => {
  const { pkgNames } = await getWorkspacesInfo();
  let output = '';
  pkgNames.forEach((pkg) => {
    output = `${output}export * from '${pkg}';\n`;
  });
  return output;
};

async function generateIndex() {
  logger.gray('\nGenerating index exports');
  const indexOutput = await getIndexOutput();

  return writeToFile(CORE_INDEX_PATH, indexOutput, {
    successMessage: '[@real-system/core] Generated index exports.',
    errorMessage: '[@real-system/core] Failed to generate index exports.',
  });
}

module.exports = generateIndex;
