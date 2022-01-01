const { existsSync } = require('fs');
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
  try {
    const cacheExists = existsSync(`${__dirname}/.cache/packages.json`);
    if (cacheExists) {
      return logger.info(
        '[Jest Package Cache]: Skipping create package cache because it already exists.'
      );
    }
  } catch (err) {
    logger.warn(err);
  }

  return updatePackageCache();
})();
