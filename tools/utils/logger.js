/* eslint-disable no-console */
const { blue, yellow, green, red, gray, magenta } = require('chalk');

/**
 * @desc a light wrapper around console.log with chalk
 */
const logger = console.log;
logger.error = (...args) => console.error(red(...args));
logger.warn = (...args) => console.warn(yellow(...args));
logger.blue = (...args) => logger(blue(...args));
logger.yellow = (...args) => logger(yellow(...args));
logger.green = (...args) => logger(green(...args));
logger.success = (...args) => logger(green(...args));
logger.red = (...args) => logger(red(...args));
logger.gray = (...args) => logger(gray(...args));
logger.magenta = (...args) => logger(magenta(...args));

module.exports = {
  logger,
};
