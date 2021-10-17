const fs = require('fs');
const path = require('path');
const Terser = require('terser');
const { CORE_BUNDLE_OUTPUT_PATH } = require('./utils/constants');
const { writeToFile } = require('../../../tools/utils');

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
    writeToFile(filePath, result.code, {
      errorMessage: `Failed to minify ${filePath}`,
      successMessage: `Minified ${filePath}`,
    });
  });
})();
