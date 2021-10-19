const { writeFile } = require('fs');
const { logger } = require('./logger');

function writeToFile(
  filePath,
  content,
  { successMessage, errorMessage, formatJson = false }
) {
  const output = formatJson ? JSON.stringify(content, null, 2) : content;

  writeFile(filePath, output, 'utf8', (error) => {
    if (error) {
      if (errorMessage != null) {
        logger.error(errorMessage);
      }

      logger(error);
      return false;
    }
    if (successMessage != null) {
      logger.success(successMessage);
    }
  });
}

module.exports = { writeToFile };