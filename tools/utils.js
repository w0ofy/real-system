const fs = require('fs');
const { Generator } = require('npm-dts');
const { blue, yellow, green, red } = require('chalk');

/**
 * logger utilities
 */
const logger = console.log;
logger.error = (...args) => console.error(red(...args));
logger.warn = (...args) => console.warn(yellow(...args));
logger.blue = (...args) => logger(blue(...args));
logger.yellow = (...args) => logger(yellow(...args));
logger.green = (...args) => logger(green(...args));
logger.red = (...args) => logger(red(...args));

/**
 * environment utilities
 */
const env = process.env.NODE_ENV;
const isProduction = env === 'production';

/**
 * generate typescript types
 */
const generateTypes = (entry, output) => {
  logger(
    blue(`GENERATING TYPES FROM `),
    yellow(`"${entry}"`),
    blue(' TO '),
    yellow(`"${output}"`)
  );

  return new Generator(
    {
      entry,
      output,
      logLevel: 'debug',
    },
    true,
    true
  ).generate();
};

const getWildcardExternalPeers = (peerAndDevDeps = {}) => {
  const externalDeps = Object.keys(peerAndDevDeps);
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

const getPackageJsonFields = () => {
  // read package.json
  let packageJson = fs.readFileSync('package.json');
  packageJson = JSON.parse(packageJson);
  // Entry and Output file paths
  const entryPoint = packageJson['main:dev'];
  const outFileCJS = packageJson['main'];
  const outFileESM = packageJson['module'];
  const outFileTypes = packageJson['types'];

  return {
    ...packageJson,
    entryPoint,
    outFileCJS,
    outFileESM,
    outFileTypes,
  };
};

module.exports = {
  generateTypes,
  logger,
  blue,
  yellow,
  green,
  red,
  env,
  isProduction,
  getWildcardExternalPeers,
  getPackageJsonFields,
};
