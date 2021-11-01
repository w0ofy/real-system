/* eslint-disable no-unused-vars */
const generateGitIgnore = require('./utils/generateGitIgnore');
const generateIndex = require('./utils/generateIndex');
const generatePkgJson = require('./utils/generatePkgJson');
const generateUnbarreledExports = require('./utils/generateUnbarreledExports');

/**
 * @function generate generate core bundle from real system package workspaces
 */
(async function generate() {
  /*
   * Write index file
   */
  await generateIndex();
  /*
   * Write each unbarreled file
   */
  await generateUnbarreledExports();
  /*
   * Generate package.json for each unbarreled export
   */
  await generatePkgJson();
  /*
   * Generate a .gitignore file to prevent committing built files
   */
  await generateGitIgnore();
})();
