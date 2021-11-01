const { commandSync } = require('execa');
const { join } = require('path');
const { PACKAGE_STATUS } = require('../../../../tools/utils/env');
const { CORE_PATH } = require('./constants');

const getUnbarreledFilePath = (pkgName) => `src/${pkgName}.ts`;

const getUnbarreledFileFullPath = (pkgName) =>
  join(CORE_PATH, getUnbarreledFilePath(pkgName));

const getPurePkgName = (pkgName) => pkgName.replace('@realsystem/', '');

const getPkgJson = (workspace) =>
  require(`${__dirname}/../../../../${workspace.location}/package.json`);

const getWorkspacesInfo = () => {
  let data = commandSync('yarn workspaces info --json').stdout;
  data = JSON.parse(data);

  const coreDependencies = {};
  const purePkgNames = [];
  const workspaceNames = Object.keys(data)
    .filter((name) => !name.includes('core'))
    .sort();

  const pkgList = workspaceNames.map((name) => {
    const pureName = getPurePkgName(name);
    purePkgNames.push(pureName);
    const workspaceInfo = data[name];
    const pkgJson = getPkgJson(workspaceInfo);
    if (PACKAGE_STATUS[pkgJson.status]) {
      coreDependencies[name] = `^${pkgJson.version}`;
    }
    return {
      name,
      pureName,
      relativeLocationFromCore: `../${pureName}`,
      version: pkgJson.version,
      ...workspaceInfo,
    };
  });

  return {
    pkgList,
    pkgNames: workspaceNames,
    purePkgNames: purePkgNames,
    data,
    coreDependencies,
  };
};

module.exports = {
  getPurePkgName,
  getWorkspacesInfo,
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
