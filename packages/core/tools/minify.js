const fs = require('fs');
const { join } = require('path');
const Terser = require('terser');
const { CORE_OUTPUT_PATH } = require('./utils/constants');
const { writeToFile } = require('../../../tools/utils');

function getAllJsFiles() {
  const files = fs.readdirSync(CORE_OUTPUT_PATH);
  const arrayOfFiles = [];

  files.forEach((file) => {
    arrayOfFiles.push(join(CORE_OUTPUT_PATH, '/', file));
  });
  return arrayOfFiles.filter((file) => file.match(/\.js$/));
}

// Minify core bundle js files w/ terser
(function minifyFiles() {
  const filePaths = getAllJsFiles();

  return filePaths.forEach(async (filePath) => {
    const result = await Terser.minify(fs.readFileSync(filePath, 'utf8'), {});
    writeToFile(filePath, result.code, {
      errorMessage: `Failed to minify ${filePath}.`,
      successMessage: `[${filePath}]: Minified.`,
    });
  });
})();
