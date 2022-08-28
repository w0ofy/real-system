const fs = require('fs');
const { resolve } = require('path');
const { prompt } = require('inquirer');
const {
  getWorkspacesInfo,
  logger,
  writeToFile,
  PRODUCTION,
} = require('./utils');

const getPackagesToProductionize = async () => {
  const { pkgList } = await getWorkspacesInfo({ hasProdStatus: false });

  if (pkgList.length < 1) {
    return;
  }

  const choices = pkgList.map((pkg) => ({
    name: pkg.name,
    value: pkg,
  }));

  return await prompt([
    {
      type: 'checkbox',
      name: 'packagesToUpdate',
      message: 'Select packages to productionize.',
      choices,
    },
  ]).then((answers) => answers.packagesToUpdate);
};

(async function runProductionizePackages() {
  /** get list of packages to productionize */
  const packagesToProductionize = await getPackagesToProductionize();

  if (!packagesToProductionize) {
    return logger.info('All packages are productionized already.');
  }
  /** update each original package.json */
  packagesToProductionize.forEach(({ name, location }) => {
    const pathToPkgJson = `${resolve(location)}/package.json`;
    const pkgJson = fs.readFileSync(pathToPkgJson, 'utf-8');

    const output = JSON.parse(pkgJson);
    delete output.private;
    output.status = PRODUCTION;

    writeToFile(pathToPkgJson, output, {
      formatJson: true,
      successMessage: `Productionized ${name}.`,
      errorMessage: `Failed to productionize ${name}.`,
    });
  });
})();
