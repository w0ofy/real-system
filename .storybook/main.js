const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-performance',
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
    reactDocgenTypescriptOptions: {
      skipPropsWithoutDoc: false,
      // shouldExtractLiteralValuesFromEnum: true,
      // // don't include node_module props as you'll cause the machine to run out of memory on our repo
      propFilter: (prop) => {
        // document props from styled-system
        return prop.parent
          ? /realsystem\/node_modules\/@types\/styled-system\/index.d.ts/.test(
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
      // new TsconfigPathsPlugin(),
    ];

    config.resolve.plugins = [...config.resolve.plugins, ...customPlugins];
    return config;
  },
};
