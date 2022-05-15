const { rollup } = require('rollup');
const { logger } = require('../utils');
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

  const bundle = await rollup({
    input: packageEntryPoint,
    output: { sourcemap: true, exports: 'named' },
    plugins,
  });
  logger.info('-------------------------');
  logger.job(packageName);
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
  logger.info('-------------------------\n');

  // closes the bundle
  await bundle.close();
}

module.exports = { build, globals };
