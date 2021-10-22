const rootConfig = require('../../babel.config');

const presets = [
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, not dead',
      esmodules: true,
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const plugins = [
  'macros',
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  '@babel/proposal-private-methods',
  '@babel/proposal-private-property-in-object',
  '@babel/plugin-transform-runtime',
  ...rootConfig.plugins,
];

module.exports = {
  presets,
  plugins,
};
