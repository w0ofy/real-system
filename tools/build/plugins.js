const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const localResolve = require('rollup-plugin-local-resolve');
const del = require('rollup-plugin-delete');
const esbuild = require('rollup-plugin-esbuild').default;
const filesize = require('rollup-plugin-filesize');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { ENV } = require('../utils');

const plugins = [
  esbuild({
    color: true,
    target: ['es2015', 'chrome66', 'firefox58', 'safari11', 'edge79', 'node12'],
    minify: true,
    define: {
      'process.env.NODE_ENV': `"${ENV}"`,
    },
    platform: 'node',
    treeShaking: true,
  }),
  del({ targets: 'lib', runOnce: true }),
  peerDepsExternal(),
  commonjs(),
  nodeResolve({ browser: true }),
  localResolve({ browser: true }),
  filesize({ theme: 'light' }),
];

module.exports = { plugins };
