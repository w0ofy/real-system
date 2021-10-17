const { join } = require('path');

const BLOCKLIST = ['@realsystem/core'];

const PACKAGES_ROOT_PATH = join(__dirname, '../../../..');
const CORE_BUNDLE_PATH = join(__dirname, '../../');
const CORE_BUNDLE_INDEX_PATH = join(CORE_BUNDLE_PATH, 'src/index.ts');
const CORE_BUNDLE_PACKAGE_PATH = join(CORE_BUNDLE_PATH, 'package.json');
const CORE_BUNDLE_OUTPUT_PATH = join(CORE_BUNDLE_PATH, 'lib/');

module.exports = {
  BLOCKLIST,
  PACKAGES_ROOT_PATH,
  CORE_BUNDLE_PATH,
  CORE_BUNDLE_INDEX_PATH,
  CORE_BUNDLE_PACKAGE_PATH,
  CORE_BUNDLE_OUTPUT_PATH,
};
