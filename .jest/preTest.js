const fs = require('fs');
const { getWorkspacesInfo, writeToFile, logger } = require('../tools/utils');
const { CACHE_FILE_PATH } = require('./constants');

const updatePackageCache = async () => {
  logger.job('[Setup test]: Writing "/.jest/.cache/packages.json"');
  const { pkgCache } = await getWorkspacesInfo({ withCore: true });

  return writeToFile(CACHE_FILE_PATH, pkgCache, {
    formatJson: true,
    successMessage: `[Jest Package Cache] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
  });
};

const cacheExists = fs.statSync(`${__dirname}/.cache/packages.json`).isFile();

/* 
 * Returned Shape
 [{
    name: '@real-system/button',
    version: '0.0.0',
    private: false,
    location: '/.../real-system/packages/button'
 }, ...]
 * writes to ./.cache/packages.json. This file is a cache for jest to refer for resolving modules
 */
(async function preTest() {
  if (cacheExists) {
    logger.info(
      '[Jest Package Cache]: Skipping create package cache because is already exists.'
    );
    return;
  }
  return updatePackageCache();
})();
