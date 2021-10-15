/**
 * environment utilities
 */
const env = process.env.NODE_ENV;
const isProduction = env === 'production';

module.exports = {
  env,
  isProduction,
};
