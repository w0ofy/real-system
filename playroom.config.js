const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  title: 'Real System Sandbox',
  components: './packages/core/src/index.ts',
  outputPath: './.storybook/build/playroom',
  openBrowser: false,
  iframeSandbox: 'allow-scripts allow-popups allow-same-origin',
  scope: './.storybook/playroom/useScope.ts',
  snippets: './.storybook/playroom/snippets.json',
  frameComponent: './.storybook/playroom/FrameComponent.tsx',
  typeScriptFiles: ['./src/**/*.{ts,tsx}', '!**/node_modules'],
  widths: [375, 768, 960, 1024],
  webpackConfig: () => ({
    resolve: {
      plugins: [
        new DirectoryNamedWebpackPlugin({
          honorPackage: ['main:dev', 'main'],
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
  }),
};
