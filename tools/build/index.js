const { build, globals } = require('./rollup');
const { makePlugins } = require('./plugins');

module.exports = build;
/**
 * so things can be imported like `const build = require('.../build')` used like `build.plugins` or `build.globals`
 */
exports = module.exports;
exports.plugins = makePlugins;
exports.globals = globals;
