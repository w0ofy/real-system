/* eslint-disable no-unused-vars */
// const generateCoreBundle = require('./utils/generateCoreBundle');
const generateGitIgnore = require('./utils/generateGitIgnore');
const generatePkgJson = require('./utils/generatePkgJson');

/**
 * @function build bundle esm & cjs package for unbarreled exports
 */
(async function generate() {
  /*
   * Generate a .gitignore file to prevent committing built files
   */
  await generateGitIgnore();
  /*
   * Generate package.json for each unbarreled export
   */
  await generatePkgJson();
})();
