const path = require('path');
const { command } = require('execa');
const { PACKAGE_STATUS } = require('./env');
/**
 * @todo fix json parse ???
 */
const getPkgJsonFromWorkspace = (workspace) =>
  require(`${__dirname}/../../${workspace.location}/package.json`);

const getPurePkgName = (pkgName) => pkgName.replace('@real-system/', '');

const DEFAULT_CONFIG = { withCore: false };
const getWorkspacesInfo = async (config = DEFAULT_CONFIG) => {
  let data = await command('yarn workspaces info --json');

  return new Promise((resolve, reject) => {
    try {
      data = JSON.parse(data.stdout);
    } catch (err) {
      reject(err);
    }

    const coreDependencies = {};
    const purePkgNames = [];
    const pkgCache = [];
    const workspaceNames = Object.keys(data)
      .filter((name) => (config.withCore ? true : !name.includes('core')))
      .sort();

    const pkgList = workspaceNames.map((name) => {
      const workspaceInfo = data[name];
      const pkgJson = getPkgJsonFromWorkspace(workspaceInfo);

      // push pure name
      const pureName = getPurePkgName(name);
      purePkgNames.push(pureName);
      // push to coreDependencies if package is productionized (ready for release)
      if (PACKAGE_STATUS[pkgJson.status]) {
        coreDependencies[name] = `^${pkgJson.version}`;
      }

      const list = {
        name,
        pureName,
        relativeLocationFromCore: path.resolve(
          __dirname,
          `../../packages/${pureName}`
        ),
        version: pkgJson.version,
        ...workspaceInfo,
      };

      // push to pkgCache
      pkgCache.push({
        name,
        version: pkgJson.version,
        private: false,
        location: path.resolve(__dirname, '../..', workspaceInfo.location),
      });

      return list;
    });

    resolve({
      pkgCache,
      pkgList,
      pkgNames: workspaceNames,
      purePkgNames: purePkgNames,
      data,
      coreDependencies,
    });
  });
};

module.exports = {
  getPurePkgName,
  getWorkspacesInfo,
};
