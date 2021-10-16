const { commandSync } = require('execa');
const { join } = require('path');
const { CORE_BUNDLE_PATH } = require('../constants');

const getUnbarreledFilePath = (pkg) => `src/${getPurePkgName(pkg.name)}.ts`;
const getUnbarreledOutputFilePath = (pkg) =>
  `lib/${getPurePkgName(pkg.name)}.js`;
const getUnbarreledFileFullPath = (pkg) =>
  join(CORE_BUNDLE_PATH, getUnbarreledFilePath(pkg));

const getPurePkgName = (pkgName) => pkgName.replace('@realsystem/', '');

const getWorkspacesInfo = () => {
  let data = commandSync('yarn workspaces info --json').stdout;
  data = JSON.parse(JSON.parse(data).data);

  const workspaceNames = Object.keys(data).filter(
    (name) => !name.includes('core')
  );

  const pkgList = workspaceNames.map((name) => ({
    name,
    pureName: getPurePkgName(name),
    relativeLocationFromCore: `../${getPurePkgName(name)}`,
    ...data[name],
  }));

  return {
    pkgList,
    pkgNames: workspaceNames.map((name) => getPurePkgName(name)),
    data,
  };
};

module.exports = {
  getPurePkgName,
  getWorkspacesInfo,
  getUnbarreledOutputFilePath,
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
