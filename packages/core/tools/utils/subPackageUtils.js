const { join } = require('path');
const { CORE_PATH } = require('./constants');

const getUnbarreledFilePath = (pkgName) => `src/${pkgName}.ts`;

const getUnbarreledFileFullPath = (pkgName) =>
  join(CORE_PATH, getUnbarreledFilePath(pkgName));

module.exports = {
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
