const rollup = require('rollup');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const localResolve = require('rollup-plugin-local-resolve');
const del = require('rollup-plugin-delete');
const esbuild = require('rollup-plugin-esbuild');
const filesize = require('rollup-plugin-filesize');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { ENV } = require('./utils');

const plugins = [
  esbuild({
    color: true,
    target: ['es2017', 'chrome58', 'firefox57', 'safari11', 'edge18', 'node12'],
    minify: true,
    define: {
      'process.env.NODE_ENV': `"${ENV}"`,
    },
    sourcemap: true,
  }),
  del({ targets: 'lib', runOnce: true }),
  peerDepsExternal(),
  commonjs(),
  nodeResolve({ browser: true }),
  localResolve({ browser: true }),
  filesize({ theme: 'light' }),
];

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
exports = module.exports;
exports.plugins = plugins;
exports.globals = globals;
