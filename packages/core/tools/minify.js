const fs = require('fs');
const path = require('path');
const Terser = require('terser');
const { CORE_BUNDLE_OUTPUT_PATH } = require('./utils/constants');
const { logger } = require('../../../tools/utils/logger');

function getAllJsFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  const arrayOfFiles = [];

  files.forEach((file) => {
    arrayOfFiles.push(path.join(dirPath, '/', file));
  });
  return arrayOfFiles.filter((file) => file.match(/\.js$/));
}

// Applied terserJS to provided file paths
(function minifyFiles() {
  const filePaths = getAllJsFiles(CORE_BUNDLE_OUTPUT_PATH);

  filePaths.forEach(async (filePath) => {
    const result = await Terser.minify(fs.readFileSync(filePath, 'utf8'), {});
    fs.writeFile(filePath, result.code, 'utf8', (err) =>
      err ? logger.error(err) : logger.success(`Minified ${filePath}`)
    );
  });
})();
