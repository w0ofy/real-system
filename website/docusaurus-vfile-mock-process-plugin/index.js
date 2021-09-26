module.exports = function (context, options) {
  return {
    name: 'docusaurus-vfile-mock-process-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: [/node_modules\/util\/util.js/],
              use: [
                {
                  loader: 'imports-loader',
                  options: {
                    type: 'commonjs',
                    imports: ['single process/browser process'],
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
