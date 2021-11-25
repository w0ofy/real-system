const inquirer = require('inquirer');
const { relative } = require('path');
const { generateTemplateFiles } = require('generate-template-files');
const { getWorkspacesInfo, ROOT_PATH, writeToFile } = require('./utils');

const PATH_TO_TOOLS = `${ROOT_PATH}/tools`;
const makePaths = (pkgLocation) => ({
  __path_to_build_script__: relative(
    `${pkgLocation}/tools`,
    `${PATH_TO_TOOLS}/build/rollup.js`
  ),
  __path_to_dev_script__: relative(
    `${pkgLocation}/tools`,
    `${PATH_TO_TOOLS}/build/esbuild.js`
  ),
  __path_to_tsconfig__: relative(
    `${pkgLocation}`,
    `${ROOT_PATH}/tsconfig.json`
  ),
});

(async function generatePackage() {
  const { coreDependencies } = await getWorkspacesInfo();
  const peerDepsChoices = Object.keys(coreDependencies).map((name) => ({
    name,
    value: { version: coreDependencies[name], name },
  }));

  inquirer
    .prompt([
      // first prompt with pre-set real-system dependencies
      {
        type: 'checkbox',
        name: 'peerDeps',
        message: 'Select peer dependencies for your package.',
        choices: peerDepsChoices,
        default: 'component',
      },
    ])
    .then((answers) => {
      const { peerDeps: peerDepsAnswer } = answers;
      const peerDeps = Object.values(peerDepsAnswer).reduce(
        (a, c) => ({
          ...a,
          [c.name]: c.version,
        }),
        {}
      );

      const makeOptions = ({ option, outputPath }) => {
        const {
          __path_to_build_script__,
          __path_to_dev_script__,
          __path_to_tsconfig__,
        } = makePaths(outputPath);

        return {
          option,
          entry: {
            folderPath: './tools/templates/package/',
          },
          stringReplacers: [
            {
              question: 'Insert the name of your package e.g. combo-box',
              slot: '__pkg__',
            },
            {
              question: 'Insert the author of the package (first & last name)',
              slot: '__author__',
            },
            {
              question: 'Insert description of the package',
              slot: '__description__',
            },
            {
              question: 'Insert the name of the primary export e.g. ComboBox',
              slot: '__primary_export__',
            },
          ],
          dynamicReplacers: [
            {
              slot: '__peer_deps_list__',
              slotValue: Object.keys(peerDeps).join(' '),
            },
            {
              slot: '__path_to_tsconfig__',
              slotValue: __path_to_tsconfig__,
            },
            {
              slot: '__path_to_build_script__',
              slotValue: __path_to_build_script__,
            },
            {
              slot: '__path_to_dev_script__',
              slotValue: __path_to_dev_script__,
            },
          ],
          output: {
            path: outputPath,
          },
          onComplete: ({ output }) => {
            // update package json with selected peer dependencies from inquirer
            const PATH_TO_PACKAGE_JSON = `${output.path}/package.json`;
            const packageJson = require(PATH_TO_PACKAGE_JSON);
            packageJson.peerDependencies = {
              ...peerDeps,
              ...packageJson.peerDependencies,
            };
            packageJson.devDepndencies = {
              ...peerDeps,
              ...packageJson.peerDependencies,
            };
            writeToFile(PATH_TO_PACKAGE_JSON, packageJson, {
              formatJson: true,
              successMessage: 'Inserted peer dependencies.',
            });
          },
        };
      };

      generateTemplateFiles([
        makeOptions({
          option: 'Component Package',
          outputPath: `${ROOT_PATH}/packages/components/__pkg__(kebabCase)`,
        }),
        makeOptions({
          option: 'Library Package',
          outputPath: `${ROOT_PATH}/packages/libraries/__pkg__(kebabCase)`,
        }),
        makeOptions({
          option: 'Primitive Package',
          outputPath: `${ROOT_PATH}/packages/primitives/__pkg__(kebabCase)`,
        }),
      ]);
    });
})();
