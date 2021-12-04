const { join } = require('path');
/**
 * environment utilities
 */
const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';
const BUNDLE_OUTPUT_DIR = 'lib';
const ROOT_PATH = join(__dirname, '../..');
const CORE_PATH = join(__dirname, '../../packages/core');
const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const EXPERIMENTAL = 'experimental';
const PACKAGE_STATUS = {
  // released or ready for release
  [PRODUCTION]: true,
  // under development, not ready for release
  [DEVELOPMENT]: false,
  // under experimentation, not ready for release
  [EXPERIMENTAL]: false,
};

module.exports = {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  PACKAGE_STATUS,
  PRODUCTION,
  DEVELOPMENT,
  EXPERIMENTAL,
  ROOT_PATH,
  CORE_PATH,
};
