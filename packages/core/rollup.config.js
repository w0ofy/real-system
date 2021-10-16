import path from 'path';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import url from '@rollup/plugin-url';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

const pkg = require(path.resolve(__dirname, './package.json'));

const PLUGINS = [
  del({ targets: 'lib', runOnce: true }),
  peerDepsExternal(),
  commonjs({
    include: ['node_modules/**'],
    exclude: ['node_modules/symbol-observable/es/*.js'],
  }),
  resolve({ browser: true }),
  localResolve({
    browser: true,
  }),
  typescript({
    typescript: ttypescript,
  }),
  babel({
    babelHelpers: 'bundled',
    include: ['src/**/*'],
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  terser(),
  filesize(),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  url({
    exclude: 'node_modules/**',
    include: ['**/*.svg'],
  }),
];

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const INPUT_FILE = './src/index.ts';
const OUTPUT_DIR = 'lib';
export const CJS_OUTPUT_FILE = `${OUTPUT_DIR}/${pkg.main}`;
export const ESM_OUTPUT_FILE = `${OUTPUT_DIR}/${pkg.module}`;

const config = [
  {
    input: INPUT_FILE,
    output: {
      file: CJS_OUTPUT_FILE,
      format: 'cjs',
      name: pkg.name,
      globals: GLOBALS,
      sourcemap: 'hidden',
    },
    plugins: PLUGINS,
  },
  {
    input: INPUT_FILE,
    output: {
      file: ESM_OUTPUT_FILE,
      format: 'es',
      name: pkg.name,
      globals: GLOBALS,
      sourcemap: 'hidden',
    },
    plugins: PLUGINS,
  },
];

export default config;
