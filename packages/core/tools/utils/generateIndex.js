const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../../tools/utils');
const { CORE_INDEX_PATH } = require('./constants');

// Given a list of packages, output the index.tsx exports string
const getIndexOutput = async () => {
  const { pkgList } = await getWorkspacesInfo({
    hasProdStatus: true,
  });
  let output = '';
  pkgList
    // only output components and primitives - libraries should be accessed by using unbaralled exports
    .filter((pkg) => !pkg.location.includes('/libraries/'))
    .map((pkg) => pkg.name)
    .forEach((pkg) => {
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
