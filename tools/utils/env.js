/**
 * environment utilities
 */
const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';
const BUNDLE_OUTPUT_DIR = 'lib';

module.exports = {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
};
