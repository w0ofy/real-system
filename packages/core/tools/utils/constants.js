const { join } = require('path');

const BLOCKLIST = ['@real-system/core'];

const PACKAGES_ROOT_PATH = join(__dirname, '../../../..');
const CORE_LIBRARIES = ['styling'];
const CORE_PATH = join(__dirname, '../../');
const CORE_INDEX_PATH = join(CORE_PATH, 'src/index.ts');
const CORE_PACKAGE_PATH = join(CORE_PATH, 'package.json');
const CORE_OUTPUT_PATH = join(CORE_PATH, 'lib/');

module.exports = {
  BLOCKLIST,
  PACKAGES_ROOT_PATH,
  CORE_PATH,
  CORE_INDEX_PATH,
  CORE_PACKAGE_PATH,
  CORE_OUTPUT_PATH,
  CORE_LIBRARIES,
};
