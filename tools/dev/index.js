const { dev } = require('./esbuild');
const { makeEsbuildConfig } = require('./makeEsbuildConfig');

module.exports = dev;
/**
 * so things can be imported like `const dev = require('.../dev')` used like `dev.plugins` or `dev.globals`
 */
exports = module.exports;
exports.makeEsbuildConfig = makeEsbuildConfig;
