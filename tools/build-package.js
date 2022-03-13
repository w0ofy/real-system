const { getWorkspacesInfo, logger } = require('./utils');
const inquirer = require('inquirer');
const fuzzy = require('fuzzy');
const { command } = require('execa');

inquirer.registerPrompt(
  'checkbox-plus',
  require('inquirer-checkbox-plus-prompt')
);

(async function runBuildPackage() {
  /** get list of packages to watch/run dev */
  const { pkgNames } = await getWorkspacesInfo();

  inquirer
    .prompt([
      {
        type: 'checkbox-plus',
        name: 'pkgs',
        message: 'Select packages to build.',
        choices: pkgNames,
        pageSize: 10,
        highlight: true,
        searchable: true,
        source: (_answersSoFar, input = '') =>
          new Promise(function (resolve) {
            const fuzzyResult = fuzzy.filter(input, pkgNames);
            const data = fuzzyResult.map((element) => element.original);
            resolve(data);
          }),
      },
    ])
    .then(async ({ pkgs }) => {
      const length = pkgs.length;
      if (length < 1) {
        logger.warn('Select at least 1 package to build.');
        process.exit(1);
      }

      const include =
        length > 1
          ? `--include={${pkgs.join(',')}}`
          : `--include=${pkgs.join(',')}`;
      const buildScript = `yarn workspaces foreach --topological-dev ${include} run build`;
      logger.job(buildScript);
      await command(buildScript).stdout.pipe(process.stdout);
    });
})();
