const { resolve } = require('path');
const { getWorkspacesInfo } = require('./workspaceUtils');
const { writeToFile } = require('./writeToFile');

const CACHE_FILE_PATH = resolve(__dirname, '../.cache/packages.json');

/* 
 * Returned Shape
 [{
    name: '@real-system/button',
    version: '0.0.0',
    private: false,
    location: '/.../real-system/packages/button'
 }, ...]
 * writes to ../.cache/packages.json.  This file is a cache for other commands to not
 * repeatedly run this.
 */
const updatePackageCache = async () => {
  const { pkgCache } = await getWorkspacesInfo({ withCore: true });

  return await writeToFile(CACHE_FILE_PATH, pkgCache, {
    formatJson: true,
    successMessage: `[Monorepo cache] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
  });
};

module.exports = { updatePackageCache };
