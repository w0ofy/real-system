import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(mdx|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
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
    autodocs: 'tag',
  },
  features: {
    /** @todo make `true` and fix chunks */
    storyStoreV7: false,
  },
  typescript: {
    check: true,
  },
  async viteFinal(config, _options) {
    return mergeConfig(config, {
      resolve: {
        mainFields: ['main:dev', 'main'],
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
};

export default config;
