const rollup = require('rollup');
const { plugins } = require('./plugins');

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

async function build(packageJson) {
  const packageName = packageJson.name;
  const esmOutputFile = packageJson.module;
  const cjsOuputFile = packageJson.main;
  const packageEntryPoint = packageJson['main:dev'];

  const bundle = await rollup.rollup({
    input: packageEntryPoint,
    plugins,
  });

  await bundle.write({
    name: packageName,
    format: 'es',
    globals,
    file: esmOutputFile,
  });

  await bundle.write({
    name: packageName,
    format: 'cjs',
    globals,
    file: cjsOuputFile,
  });

  // closes the bundle
  await bundle.close();
}

module.exports = build;
/**
 * so things can be imported like `const build = require('.../build/rollup')` used like `build.plugins` or `build.globals`
 */
exports = module.exports;
exports.plugins = plugins;
exports.globals = globals;
