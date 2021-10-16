const fs = require('fs');
const path = require('path');
const { getPurePkgName, getWorkspacesInfo } = require('./subPackageUtils');

const generateGitIgnore = async () => {
  const { pkgNames } = getWorkspacesInfo();
  const ignoreList = pkgNames.map((pkg) => `/${getPurePkgName(pkg)}`);

  const output = `# Automatically generated from "yarn generate-packages"
/lib
${ignoreList.join('\n')}`;

  return await fs.writeFile(
    path.join(__dirname, '../../.gitignore'),
    output,
    () => {}
  );
};

module.exports = generateGitIgnore;
