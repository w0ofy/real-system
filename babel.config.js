const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const plugins = [
  '@emotion',
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  '@babel/plugin-transform-runtime',
];

module.exports = {
  presets,
  plugins,
};
