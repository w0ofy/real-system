const { getWorkspacesInfo, writeToFile } = require('../utils');
const { readFileSync } = require('fs');

(async function updatePkgJson() {
  const { pkgList } = await getWorkspacesInfo();
  pkgList.forEach(({ location }) => {
    const pathToPkgJson = `${location}/package.json`;
    const pkgJson = readFileSync(pathToPkgJson, 'utf-8');
    const output = JSON.parse(pkgJson);

    /** add update code here
     * @example
     * ```js
     * output.name = '@real-system/renamed-package'
     * ```
     */

    writeToFile(pathToPkgJson, output, {
      formatJson: true,
      successMessage: `wrote ${output.name}.`,
      errorMessage: `Failed to productionize ${pkgJson.name}.`,
    });
  });
})();
