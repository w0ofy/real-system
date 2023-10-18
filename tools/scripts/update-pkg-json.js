const {
  getWorkspacesInfo,
  logger,
  // writeToFile
} = require('../utils');
const { readFileSync } = require('fs');

(async function updatePkgJson() {
  const { pkgList } = await getWorkspacesInfo();
  pkgList.forEach(({ location }) => {
    const pathToPkgJson = `${location}/package.json`;
    const pkgJson = readFileSync(pathToPkgJson, 'utf-8');
    const output = JSON.parse(pkgJson);

    logger(output);

    /** add update code here
     * @example
     * ```js
     * // previous use-cases
     * output.name = '@real-system/renamed-package'
     * output.scripts['tscheck'] = 'tsc --noEmit --emitDeclarationOnly false';
     * ```
     */

    /** uncomment below in order to overwrite workspace package.json files  */
    // writeToFile(pathToPkgJson, output, {
    //   formatJson: true,
    //   successMessage: `wrote ${output.name}.`,
    //   errorMessage: `Failed to productionize ${pkgJson.name}.`,
    // });
  });
})();
