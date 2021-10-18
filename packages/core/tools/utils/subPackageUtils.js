const { commandSync } = require('execa');
const { join } = require('path');
const { CORE_PATH } = require('./constants');

const getUnbarreledFilePath = (pkgName) => `src/${pkgName}.ts`;

const getUnbarreledFileFullPath = (pkgName) =>
  join(CORE_PATH, getUnbarreledFilePath(pkgName));

const getPurePkgName = (pkgName) => pkgName.replace('@realsystem/', '');

const getWorkspacesInfo = () => {
  let data = commandSync('yarn workspaces info --json').stdout;
  data = JSON.parse(JSON.parse(data).data);

  const workspaceNames = Object.keys(data)
    .filter((name) => !name.includes('core'))
    .sort();
  const purePkgNames = [];

  const pkgList = workspaceNames.map((name) => {
    const pureName = getPurePkgName(name);
    purePkgNames.push(pureName);
    return {
      name,
      pureName,
      relativeLocationFromCore: `../${pureName}`,
      ...data[name],
    };
  });

  return {
    pkgList,
    pkgNames: workspaceNames,
    purePkgNames: purePkgNames,
    data,
  };
};

module.exports = {
  getPurePkgName,
  getWorkspacesInfo,
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
