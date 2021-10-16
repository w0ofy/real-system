const { commandSync } = require('execa');

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
};
