import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(mdx|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
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
    autodocs: true,
    defaultName: 'Documentation',
  },
  features: {
    /** @todo make `true` and fix chunks */
    storyStoreV7: true,
  },
  typescript: {
    check: true,
  },
  async viteFinal(config, _options) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['@emotion/react'],
      },
      resolve: {
        mainFields: ['main', 'module'],
        dedupe: ['@emotion/react'],
      },
      define: { 'process.env': {} },
    });
  },
};

export default config;
