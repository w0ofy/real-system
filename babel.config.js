const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
];

// 'loose' mode configuration must be the same for @babel/plugin-proposal-class-properties,
//  @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled).
const plugins = [
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/proposal-object-rest-spread',
  '@babel/plugin-transform-runtime',
];

module.exports = {
  presets,
  plugins,
};
