import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(mdx|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  async viteFinal(config, _options) {
    return mergeConfig(config, {
      resolve: {
        mainFields: ['main:dev', 'browser', 'main', 'module'],
        alias: {
          '@emotion/react': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/react')
          ),
          '@emotion/styled': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/styled')
          ),
          '@emotion/core': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/react')
          ),
          'emotion-theming': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/react')
          ),
        },
      },
    });
  },
  staticDirs: ['./static'],
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: true,
  },
};

export default config;
