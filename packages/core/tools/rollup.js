const rollup = require('rollup');
const {
  getUnbarreledFileFullPath,
  getWorkspacesInfo,
} = require('./utils/subPackageUtils');
const { CORE_OUTPUT_PATH } = require('./utils/constants');
const rootRollup = require('../../../tools/rollup');

(async function build() {
  const { pkgNames, purePkgNames } = getWorkspacesInfo();

  for (let i = 0; i < pkgNames.length; i++) {
    const pkg = pkgNames[i];
    const pureName = purePkgNames[i];
    const bundle = await rollup.rollup({
      input: getUnbarreledFileFullPath(pureName),
      plugins: rootRollup.plugins,
    });

    await bundle.write({
      name: pkg,
      format: 'cjs',
      globals: rootRollup.globals,
      file: `${CORE_OUTPUT_PATH}/${pureName}.js`,
    });

    await bundle.close();
  }
})();
