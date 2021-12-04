const { writeFile } = require('fs');
const { logger } = require('./logger');

async function writeToFile(
  filePath,
  content,
  { successMessage = undefined, errorMessage = undefined, formatJson = false }
) {
  const output = formatJson ? JSON.stringify(content, undefined, 2) : content;

  return new Promise((resolve, reject) => {
    writeFile(filePath, output, 'utf8', (error) => {
      if (error) {
        if (errorMessage !== undefined) {
          logger.error(errorMessage);
          reject(errorMessage);
        }

        logger(error);
        return false;
      }
      if (successMessage !== undefined) {
        logger.success(successMessage);
        resolve(successMessage);
      }
    });
  });
}

module.exports = { writeToFile };
