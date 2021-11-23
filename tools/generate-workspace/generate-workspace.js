// Heavy copy paste from https://github.com/reactjs/react-codemod/blob/master/bin/cli.js

const inquirer = require('inquirer');
const fs = require('fs');
const { writeToFile } = require('../utils');
const argv = require('minimist')(process.argv.slice(2));

const PACKAGE_KINDS = [
  {
    name: 'primitive',
    value: 'src/primitives',
  },
  {
    name: 'library',
    value: 'src/libraries',
  },
  {
    name: 'component',
    value: 'src/components',
  },
];

const makeDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const makeRootFiles = (pathToPackage) => {
  writeToFile(`${pathToPackage}`);
  writeToFile(`${pathToPackage}`);
  writeToFile(`${pathToPackage}`);
  writeToFile(`${pathToPackage}`);
  writeToFile(`${pathToPackage}`);
};
function run() {
  const pkgName = argv[0];

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'pathToPkg',
        message: 'What kind of package are you creating',
        choices: PACKAGE_KINDS,
        default: 'component',
      },
    ])
    .then((answers) => {
      const { pathToPkg } = answers;
      const pkg = `${pathToPkg}/${pkgName}`;

      makeDirectory(pkg);
    });
}

module.exports = {
  run,
};
