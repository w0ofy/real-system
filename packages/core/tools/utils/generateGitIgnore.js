const { join } = require('path');
const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../../tools/utils');

const generateGitIgnore = async () => {
  const { purePkgNames } = await getWorkspacesInfo();
  const ignoreList = purePkgNames.map((name) => `/${name}`);

  const content = `# Automatically generated from "yarn generate-packages"
/lib
${ignoreList.join('\n')}`;

  logger.gray('\nGenerating .gitignore');
  return writeToFile(join(__dirname, '../../.gitignore'), content, {
    successMessage: '[@real-system/core] Generated ".gitignore".\n',
    errorMessage: '[@real-system/core] Failed to generate ".gitignore".\n',
  });
};

module.exports = generateGitIgnore;
