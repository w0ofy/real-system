const path = require('path');
const { writeToFile, logger } = require('../../../../tools/utils');
const { getWorkspacesInfo } = require('./subPackageUtils');

const generateGitIgnore = () => {
  const { purePkgNames } = getWorkspacesInfo();
  const ignoreList = purePkgNames.map((name) => `/${name}`);

  const content = `# Automatically generated from "yarn generate-packages"
/lib
${ignoreList.join('\n')}`;

  logger.gray('Generating .gitignore');
  return writeToFile(path.join(__dirname, '../../.gitignore'), content, {
    successMessage: '[@real-system/core] Generated ".gitignore".',
    errorMessage: '[@real-system/core] Failed to generate ".gitignore".',
  });
};

module.exports = generateGitIgnore;
