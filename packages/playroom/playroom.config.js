module.exports = {
  title: 'Real System',
  components: './src/components.ts',
  frameComponent: './src/FrameComponent.tsx',
  outputPath: './dist/playroom',
  // themes: './src/themes',
  // snippets: './src/snippets.ts',
  scope: './src/useScope.ts',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search',
  baseUrl: '/playroom/',
  iframeSandbox: 'allow-scripts allow-popups allow-same-origin',
  webpackConfig: () => ({
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
