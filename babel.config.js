const makePresets = (isDev) => [
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
  [
    /** [@emotion/babel-preset-css-prop]
     * This preset is used to automatically enable Emotion’s css prop when using the classic JSX runtime.
     * This plugin is configurable with all options from the following plugins:
     *  - `babel-plugin-transform-react-jsx`: https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#options
     * - `@emotion/babel-plugin`: https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin
     *
     * React 17 introduced new JSX Transformations, which you can read about here: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
     * @NOTE If/when we adopt these new transformations, we should:
     * 1. remove this preset
     * 2. add the `@emotion/babel` plugin to our plugin section.
     */
    '@emotion/babel-preset-css-prop',
    {
      sourceMap: isDev,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      cssPropOptimization: !isDev,
    },
  ],
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
      presets: makePresets(true),
      plugins: makePlugins(true),
    },
    // used for compiling core
    release: {
      presets: makePresets(false),
      plugins: makePlugins(false),
    },
    // used for storybook / development
    development: {
      presets: makePresets(true),
      plugins: makePlugins(true),
    },
  },
};
