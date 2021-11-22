const { getWorkspacesInfo, logger } = require('./utils');
const parseArgs = require('minimist');
const concurrently = require('concurrently').concurrently;
const { getFullPkgName } = require('./utils/workspaceUtils');

/**
 * Helpers
 */
const formatArgToArray = (args, argName) => args[argName].split(',');
const getFullPkgNames = (pureNames) =>
  pureNames.map((pkgName) => getFullPkgName(pkgName));

const getPackagesToWatch = async (args) => {
  const { pkgNames } = await getWorkspacesInfo();
  let packagesToWatch = [...pkgNames];

  if (args.only?.length > 0) {
    return getFullPkgNames(formatArgToArray(args, 'only'));
  }
  // filter packages
  if (args.filter?.length > 0) {
    const packagesToBlock = getFullPkgNames(formatArgToArray(args, 'filter'));
    return pkgNames.filter((pkgName) => !packagesToBlock.includes(pkgName));
  }

  return packagesToWatch;
};
/**
 *
 * @param {*} args
 * @returns
 */
const getAdditionalScripts = (args) => {
  return formatArgToArray(args, 'with');
};

/**
 * @description Run workspace development
 * @param {array} filter pure name of real system package. The pure name is the name of the package without the "@real-system/" prefix e.g. box, button, styling, theme.
 * @param {string} with a comma-delimiter list of scripts to run concurrently.
 *
 * * Examples
 * * FILTER packages while working on Box package
 * ```
 * "dev": "node ./tools/run-workspace-dev" // this is the package.json script
 * $ yarn dev --filter=icon,spinner,visually-hidden,typography
 * output:
 *    yarn workspace @real-system/box dev
 *    yarn workspace @real-system/button dev
 *    yarn workspace @real-system/input dev
 *    yarn workspace @real-system/styling dev
 *    yarn workspace @real-system/theme dev
 *    yarn workspace @real-system/utils dev
 *    yarn:storybook
 *    yarn:playroom
 * ```
 * * run ONLY certain packages
 * ```
 * "dev": "node ./tools/run-workspace-dev" // this is the package.json script
 * $ yarn dev --only=box
 * output:
 *    yarn workspace @real-system/box dev
 *    yarn:storybook
 *    yarn:playroom
 * ```
 */
(async function runWorkspaceDev() {
  process.env.NODE_OPTIONS = '--openssl-legacy-provider';
  const args = parseArgs(process.argv, {
    default: {
      with: 'yarn:storybook,yarn:playroom',
      filter: undefined,
      only: undefined,
    },
  });

  /** get list of packages to watch/run dev */
  const packagesToWatch = await getPackagesToWatch(args);

  /** make scripts */
  const workspaceDevScripts = packagesToWatch.map(
    (name) => `yarn workspace ${name} dev`
  );
  const additionalScripts = getAdditionalScripts(args);
  const allScripts = workspaceDevScripts.concat(additionalScripts);

  logger.info('--------- WORKSPACE DEV MODE ---------');
  logger.gray(allScripts.join('\n'));

  concurrently(allScripts, {
    // continue to log stdout when concurrently finishes commands
    pauseInputStreamOnFinish: false,
    // log stdout
    raw: true,
  });
})();
