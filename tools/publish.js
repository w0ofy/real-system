const { command } = require('execa');
const { blue, green, red } = require('chalk');
const logger = console.log;
const SEM_VERS = ['patch', 'minor', 'major'];

/**
 * @function handleSemVer Type-checks semantic version argument
 */
function handleSemVer() {
  let semVer = process.argv[2];

  if (!semVer) {
    logger(red('semver required'));
    process.exit(1);
  }
  if (!SEM_VERS.includes(semVer)) {
    logger(red('invalid sem_ver'));
    process.exit(1);
  }

  return {
    semVer,
    tag: 'latest',
  };
}

/**
 * @function run Updates package version
 */
function run() {
  const { semVer, tag } = handleSemVer();

  logger('versioning pkg...');
  command(`npm version ${semVer}`)
    .then(({ stdout }) => {
      logger(green('pkg versioned'), stdout);
      buildPkg(tag);
    })
    .catch((err) => logger(red('ERR: '), err));
}

/**
 * @function buildPkg build then publish
 */
function buildPkg(tag) {
  logger('Building package bundle...');
  command('npm run build')
    .then(({ stdout }) => {
      logger(stdout);
      logger(blue('publishing pkg'));
      command(`npm publish --tag ${tag} --access public`, {
        cwd: `${process.cwd()}/lib`,
      })
        .then(({ stdout }) => logger(green(`pkg published to npm: ${stdout}`)))
        .catch((err) => logger(red('ERR:', err)));
    })
    .catch((err) => logger(red('ERR:'), err));
}

// version, build and publish the package to npm
run();
