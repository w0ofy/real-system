const rollup = require('rollup');
const commonjs = require('@rollup/plugin-commonjs');
const del = require('rollup-plugin-delete');
const esbuild = require('rollup-plugin-esbuild');
const filesize = require('rollup-plugin-filesize');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const localResolve = require('rollup-plugin-local-resolve');
const { ENV } = require('./utils');

const plugins = [
  esbuild({
    color: true,
    // Changes code to fit given target environments
    target: ['esnext'],
    minify: true,
    define: {
      'process.env.NODE_ENV': `"${ENV}"`,
    },
    sourcemap: true,
  }),
  del({ targets: 'lib', runOnce: true }),

  peerDepsExternal(),
  commonjs(),
  nodeResolve({
    browser: true,
  }),
  localResolve({ browser: true }),
  filesize({ theme: 'light' }),
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

async function build(packageJson) {
  const { name, module, main } = packageJson;
  const input = packageJson['main:dev'];

  // create a bundle
  const bundle = await rollup.rollup({
    input,
    plugins,
  });

  // generate output specific code in-memory
  // you can call this function multiple times on the same bundle object
  await bundle.write({
    name,
    format: 'es',
    globals,
    file: module,
  });

  await bundle.write({
    name,
    format: 'cjs',
    globals,
    file: main,
  });

  // closes the bundle
  await bundle.close();
}

module.exports = build;
