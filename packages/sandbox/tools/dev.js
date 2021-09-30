const { build } = require('esbuild');
const fs = require('fs-extra');

const packageJson = require('../package.json');

const generateBuild = async () => {
  await fs.rmdirSync('./build/static', { recursive: true });

  await build({
    entryPoints: ['./src/index.tsx'],
    outdir: './build/static/js',
    bundle: true,
    sourcemap: true,
    format: 'cjs',
    target: ['es2020', 'chrome58', 'firefox57', 'safari11', 'edge18', 'node12'],
    // loader: { '.svg': 'dataurl', '.png': 'dataurl' },
    jsxFactory: `jsx`,
    platform: 'node',
    inject: [`${__dirname}/../../../tools/react-shim.js`],
    // external: ['react', 'react-dom'],
    define: {
      global: 'window',
      'process.env.NODE_ENV': "'development'",
    },
    logLevel: 'debug',
    watch: true,
  }).catch(() => process.exit(1));
};

generateBuild();
