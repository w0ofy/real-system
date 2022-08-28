const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        edge: '18',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const makePlugins = (isDev) => [
  [
    '@babel/plugin-proposal-class-properties',
    {
      loose: isDev,
    },
  ],
  '@babel/proposal-object-rest-spread',
  [
    '@babel/plugin-proposal-private-methods',
    {
      loose: isDev,
    },
  ],
  [
    '@babel/plugin-proposal-private-property-in-object',
    {
      loose: isDev,
    },
  ],
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-optional-chaining',
];

module.exports = {
  env: {
    // used for bundling storybook
    production: {
      presets,
      plugins: makePlugins(true),
    },
    // used for compiling core
    release: {
      presets,
      plugins: makePlugins(false),
    },
    // used for storybook / development
    development: {
      presets,
      plugins: makePlugins(true),
    },
  },
};
