const { calibratePackagePeerDepsVersions } = require('./utils');

(async () => {
  await Promise.all([calibratePackagePeerDepsVersions()]);
})();
