const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        edge: '18',
        firefox: '60',
        chrome: '60',
        safari: '11.1',
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const plugins = [
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  '@babel/proposal-private-methods',
  '@babel/proposal-private-property-in-object',
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-optional-chaining',
];

module.exports = {
  presets,
  plugins,
};
