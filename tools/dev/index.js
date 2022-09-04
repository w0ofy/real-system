const { dev } = require('./esbuild');

module.exports = dev;
/**
 * so things can be imported like `const dev = require('.../dev')` and used like `dev.dev`
 */
exports = module.exports;
