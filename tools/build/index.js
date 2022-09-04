const { build } = require('./esbuild');

module.exports = build;
/**
 * so things can be imported like `const build = require('.../build')` used like `build.plugins`
 */
exports = module.exports;
