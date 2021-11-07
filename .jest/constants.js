const { resolve } = require('path');

const CACHE_FILE_PATH = resolve(__dirname, '.cache/packages.json');

module.exports = {
  CACHE_FILE_PATH,
};
