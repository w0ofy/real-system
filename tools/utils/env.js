const { join } = require('path');
/**
 * environment utilities
 */
const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';
const BUNDLE_OUTPUT_DIR = 'lib';
const ROOT_PATH = join(__dirname, '../..');
const CORE_PATH = join(__dirname, '../../packages/core');
const PACKAGE_STATUS = {
  // released or ready for release
  production: true,
  // under development, not ready for release
  development: false,
  // under experimentation, not ready for release
  experimental: false,
};

module.exports = {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  PACKAGE_STATUS,
  ROOT_PATH,
  CORE_PATH,
};
