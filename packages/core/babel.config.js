const rootConfig = require('../../babel.config');

const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
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
  env: {
    production: {
      presets,
      plugins,
    },
    development: {
      presets,
      plugins,
    },
  },
};
