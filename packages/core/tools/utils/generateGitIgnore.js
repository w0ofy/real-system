const path = require('path');
const { writeToFile } = require('../../../../tools/utils');
const { getPurePkgName, getWorkspacesInfo } = require('./subPackageUtils');

const generateGitIgnore = () => {
  const { pkgNames } = getWorkspacesInfo();
  const ignoreList = pkgNames.map((pkg) => `/${getPurePkgName(pkg)}`);

  const content = `# Automatically generated from "yarn generate-packages"
/lib
${ignoreList.join('\n')}`;

  return writeToFile(path.join(__dirname, '../../.gitignore'), content, {
    successMessage: 'Generated .gitignore for @realsystem/core',
    errorMessage: 'Failed to generate .gitignore for @realsystem/core',
  });
};

module.exports = generateGitIgnore;
