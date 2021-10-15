const fs = require('fs');
const { commandSync } = require('execa');
const { readPackageJson } = require('../../../../tools/utils');

const generateTypes = async (pkgDirectory, declarationDirectory) => {
  process.chdir(pkgDirectory);
  return await commandSync(
    `yarn types --outDir ../core/${declarationDirectory}`
  );
};

const getEntry = (outDir) => {
  let entry = outDir.split('/');
  return entry[entry.length - 1];
};

const generatePkgJson = async (pkgDirectory) => {
  process.chdir(pkgDirectory);
  const pkg = readPackageJson();

  const pkgJson = {
    name: pkg.name,
    version: pkg.version,
    main: getEntry(pkg.main),
    module: getEntry(pkg.module),
    types: 'types/index.d.ts',
    dependencies: 'dependencies' in pkg ? pkg.dependencies : {},
    peerDependencies: pkg.peerDependencies,
  };

  let data = JSON.stringify(pkgJson, null, 2);
  return await fs.writeFile(
    `../core/lib/${pkg.name.split('/')[1]}/package.json`,
    data,
    () => {}
  );
};

module.exports = {
  generatePkgJson,
  generateTypes,
};
