const { readPackageJson } = require('./readPackageJson');

const getPkgJson = (pathToPackage) => {
  if (pathToPackage) {
    process.chdir(pathToPackage);
  }

  // read package.json
  const pkgJson = readPackageJson();

  // Entrypoint and Output file paths
  const entryPoint = pkgJson['main:dev'];
  const outFileCJS = pkgJson['main'];
  const outFileESM = pkgJson['module'];

  return {
    ...pkgJson,
    entryPoint: `${pathToPackage ? pathToPackage + '/' : ''}${entryPoint}`,
    outfile: {
      cjs: outFileCJS,
      esm: outFileESM,
    },
  };
};

module.exports = {
  getPkgJson,
};
