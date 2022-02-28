const { join } = require('path');
const { CORE_PATH } = require('../../../../tools/utils');
const BLOCKLIST = ['@real-system/core'];

const CORE_INDEX_PATH = join(CORE_PATH, 'src/index.ts');
const CORE_PACKAGE_JSON_PATH = join(CORE_PATH, 'package.json');
const CORE_OUTPUT_PATH = join(CORE_PATH, 'lib/');

module.exports = {
  BLOCKLIST,
  CORE_PATH,
  CORE_INDEX_PATH,
  CORE_PACKAGE_JSON_PATH,
  CORE_OUTPUT_PATH,
};
