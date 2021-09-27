const esbuild = require('esbuild');
const {
  logger,
  generateTypes,
  env,
  isProduction,
  getWildcardExternalPeers,
  getPackageJsonFields,
} = require('./utils');

/**
 * @function dev bundle package for cjs and esm output
 * @param {*} packageJson package's package.json
 */
function dev() {
  const { entryPoint, outFileCJS, outFileESM, outFileTypes, ...packageJson } =
    getPackageJsonFields();

  // Things we don't want to bundle
  const external = getWildcardExternalPeers({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
  });
  const watch = isProduction
    ? false
    : {
        onRebuild(err, result) {
          if (err) throw err;
          logger.blue(result);
        },
      };
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
    minify: isProduction,
    define: {
      'process.env.NODE_ENV': `"${env}"`,
    },
    inject: [`${__dirname}/react-shim.js`],
    jsxFactory: `jsx`,
    logLevel: 'error',
    watch,
    external,
    sourcemap: 'external',
  };

  // bundle commonjs
  esbuild
    .build({
      ...config,
      format: 'cjs',
      outfile: outFileCJS,
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });

  // bundle esmodule
  esbuild
    .build({
      ...config,
      format: 'esm',
      outfile: outFileESM,
    })
    // bundle typings and copy package.json
    .then(async (result) => {
      await generateTypes(entryPoint, outFileTypes);
      logger.green(`SUCCESSFULLY BUNDLED "${packageJson.name}"!`);
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}

dev();
