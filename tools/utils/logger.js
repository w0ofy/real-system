/* eslint-disable no-console */
const { blue, yellow, green, red, gray, magenta } = require('chalk');

/**
 * @const logger a light wrapper around console.log with chalk
 * @method error
 * @method warn
 * @method blue
 * @method info
 * @method yellow
 * @method green
 * @method succes
 * @method red
 * @method gray
 * @method job
 * @method magenta
 */
const logger = console.log;
logger.error = (...args) => console.error(red.bold.underline(...args));
logger.warn = (...args) => console.warn(yellow(...args));
logger.info = (...args) => console.info(blue(...args));
logger.blue = (...args) => logger(blue(...args));
logger.yellow = (...args) => logger(yellow(...args));
logger.green = (...args) => logger(green(...args));
logger.success = (...args) => logger(green.bold.underline(...args));
logger.red = (...args) => logger(red(...args));
logger.gray = (...args) => logger(gray(...args));
logger.job = logger.gray;
logger.magenta = (...args) => logger(magenta(...args));
logger.table = (...args) => console.table(gray(...args));

module.exports = {
  logger,
};
