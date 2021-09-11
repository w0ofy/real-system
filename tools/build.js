const esbuild = require('esbuild');
const { Generator } = require('npm-dts');
const fs = require('fs');
const { commandSync } = require('execa');
const { green, blue, red } = require('chalk');
const logger = console.log;
const env = process.env.NODE_ENV;
const OUT_DIRECTORY = 'lib';
const PACKAGE_JSON = 'package.json';

const getWildcardExternalPeers = (peerDeps = {}) => {
  const externalDeps = Object.keys(peerDeps);
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

const copyPackageJson = () => {
  logger(blue(`copying package.json...`));

  fs.copyFile(PACKAGE_JSON, `${OUT_DIRECTORY}/package.json`, (err) => {
    if (err) throw red(err);
  });
};

const bundleTypings = async (entry) => {
  logger(blue(`generating types...`));

  return new Generator({
    entry,
    output: `${OUT_DIRECTORY}/index.d.ts`,
  }).generate();
};
/**
 * @function build bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 */
function build() {
  // clean outdirectory
  commandSync(`rimraf ./${OUT_DIRECTORY}`);

  // read package.json
  let packageJson = fs.readFileSync(PACKAGE_JSON);
  packageJson = JSON.parse(packageJson);

  // Entry and Output file paths
  const entryPoint = packageJson['main:dev'];
  const outFileCJS = `${OUT_DIRECTORY}/${packageJson['main']}`;
  const outFileESM = `${OUT_DIRECTORY}/${packageJson['module']}`;

  // Things we don't want to bundle
  const external = getWildcardExternalPeers(packageJson.peerDependencies);

  // ESbuild config
  const config = {
    color: true,
    entryPoints: [entryPoint],
    mainFields: ['module', 'main'],
    // Fixes issues related to SSR (website builds)
    platform: 'node',
    bundle: true,
    // Changes code to fit given target environments
    target: ['es2020', 'chrome58', 'firefox57', 'safari11', 'edge18', 'node12'],
    // Only minify in prod
    minify: env === 'production',
    define: {
      'process.env.NODE_ENV': `"${env}"`,
    },
    inject: [`${__dirname}/react-shim.js`],
    external,
  };

  // bundle commonjs
  esbuild
    .build({
      ...config,
      format: 'cjs',
      outfile: outFileCJS,
    })
    .catch(() => process.exit(1));

  // bundle esmodule
  esbuild
    .build({
      ...config,
      format: 'esm',
      outfile: outFileESM,
    })
    // bundle typings and copy package.json
    .then(async () => {
      copyPackageJson();
      await bundleTypings(entryPoint);
      logger(green(`"${packageJson.name}"` + ' successfully bundled!'));
    })
    .catch(() => process.exit(1));
}

build();
