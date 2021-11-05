const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-performance',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    'storybook-addon-playroom',
  ],
  typescript: {
    // enable type checking
    check: true,
    checkOptions: {
      // check all ts and tsx files, but not fixtures as they include errors on purpose
      reportFiles: ['packages/**/*.{ts,tsx}'],
    },
    // choose react-docgen-typescript to generate the prop tables
    reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) =>

    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
    // these options will include styled-system props
    reactDocgenTypescriptOptions: {
      skipPropsWithoutDoc: false,
      shouldExtractLiteralValuesFromEnum: true,
      // // don't include node_module props as you'll cause the machine to run out of memory on our repo
      propFilter: (prop) => {
        // document props from styled-system
        return prop.parent
          ? /real-system\/node_modules\/@types\/styled-system\/index.d.ts/.test(
              prop?.parent?.fileName
            )
          : true;
      },
    },
  },

  webpackFinal: async (config) => {
    const customPlugins = [
      new DirectoryNamedWebpackPlugin({
        honorPackage: ['main:dev', 'main'],
        exclude: /node_modules/,
      }),
    ];

    config.resolve.plugins = [...config.resolve.plugins, ...customPlugins];
    return config;
  },
};
