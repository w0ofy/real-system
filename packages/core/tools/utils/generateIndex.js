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
    // only output components and primitives - libraries require unbaralled exports in order to be accessed (this avoids named-export conflicts)
    .filter((pkg) => !pkg.location.includes('/libraries/'))
    .forEach((pkg) => {
      output = `${output}export * from '${pkg.name}';\n`;
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
