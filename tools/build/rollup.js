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

  const esmBundle = await rollup({
    input: packageEntryPoint,
    output: { sourcemap: true, exports: 'named' },
    plugins: plugins,
  });
  const cjsBundle = await rollup({
    input: packageEntryPoint,
    output: { sourcemap: true, exports: 'named' },
    plugins: plugins,
  });

  logger.info('-------------------------');
  logger.job(packageName);

  await esmBundle.write({
    name: packageName,
    format: 'esm',
    globals,
    file: esmOutputFile,
  });

  await cjsBundle.write({
    name: packageName,
    format: 'cjs',
    globals,
    file: cjsOuputFile,
  });

  logger.info('-------------------------\n');

  // closes the esm bundle
  await esmBundle.close();

  // closes the cjs bundle
  await cjsBundle.close();
}

module.exports = { build, globals };
