const { getWorkspacesInfo, logger } = require('./utils');
const parseArgs = require('minimist');
const concurrently = require('concurrently').concurrently;

/**
 * Helpers
 */
const getPackagesToWatch = async (args) => {
  const { pkgNames } = await getWorkspacesInfo();
  let packagesToWatch = [...pkgNames];

  // filter packages
  if (args.filter?.length > 0) {
    const packagesToBlock = args.filter
      .split(',')
      .map((pkg) => `@real-system/${pkg}`);
    packagesToWatch = pkgNames.filter(
      (pkgName) => !packagesToBlock.includes(pkgName)
    );
  }

  return packagesToWatch;
};
/**
 *
 * @param {*} args
 * @returns
 */
const getAdditionalScripts = (args) => {
  return args.with.split(',');
};

/**
 * @description Run workspace development
 * @param {array} filter pure name of real system package. The pure name is the name of the package without the "@real-system/" prefix e.g. box, button, styling, theme.
 * @param {string} with a comma-delimiter list of scripts to run concurrently.
 *
 * * Examples
 * * filter packages while working on Box package
 * ```
 * "dev": "node ./tools/run-workspace-dev" // this is the package.json script
 * $ yarn dev -- --filter=icon,button,styling,theme,utils,spinner
 * ```
 */
(async function runWorkspaceDev() {
  process.env.NODE_OPTIONS = '--openssl-legacy-provider';
  const args = parseArgs(process.argv, {
    default: { with: 'yarn:storybook,yarn:playroom', filter: undefined },
  });

  /** get list of packages to watch/run dev */
  const packagesToWatch = await getPackagesToWatch(args);

  /** make scripts */
  const workspaceDevScripts = packagesToWatch.map(
    (name) => `yarn workspace ${name} dev`
  );
  const additionalScripts = getAdditionalScripts(args);
  const allScripts = workspaceDevScripts.concat(additionalScripts);

  logger.info(allScripts);

  concurrently(allScripts, {
    // continue to log stdout when concurrently finishes commands
    pauseInputStreamOnFinish: false,
    // log stdout
    raw: true,
  });
})();
