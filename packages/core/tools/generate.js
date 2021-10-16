/* eslint-disable no-unused-vars */
const generateCoreBundle = require('./utils/generateCoreBundle');
const generateGitIgnore = require('./utils/generateGitIgnore');
const generateUnbarreledExports = require('./utils/generateUnbarreledExports');

/**
 * @function build bundle esm & cjs package for unbarreled exports
 */
(async function generate() {
  /*
   * Generate the core bundle
   */
  await generateCoreBundle();
  /*
   * Generate a .gitignore file to prevent committing built files
   */
  await generateGitIgnore();
  /*
   * Write each unbarreled file
   */
  await generateUnbarreledExports();
})();
