const { getWorkspacesInfo, logger } = require('./utils');
const command = require('execa').command;
const { scriptUtils, Workspace, Project } = require('@yarnpkg/core');

(async function runPkgDev() {
  const { pkgNames } = await getWorkspacesInfo();

  const intent = process.argv[2];

  // scriptUtils.executeWorkspaceScript(
  //   new Workspace('packages/primitices/*', {
  //     project: new Project('packages/primitices/box'),
  //   }),
  //   intent,
  //   [],
  //   {
  //     cwd: process.cwd(),
  //   }
  // );

  logger.info(pkgNames[0]);

  let eachCommand = pkgNames
    .map((name) => `'yarn workspace ${name} run ${intent}'`)
    .join(' ');

  eachCommand = `concurrently ${eachCommand}`;

  command(eachCommand).stdout.pipe(process.stdout);
})();
