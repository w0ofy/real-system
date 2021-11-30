const { getWorkspacesInfo, logger } = require('./utils');
const inquirer = require('inquirer');
const { command } = require('execa');

(async function runWorkspaceDev() {
  /** get list of packages to watch/run dev */
  const { pkgNames } = await getWorkspacesInfo();

  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'pkgs',
        message: 'Select packages to build.',
        choices: pkgNames,
        default: 'component',
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
