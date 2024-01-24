import type { StorybookConfig } from '@storybook/react-vite';
import { loadEnv, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(mdx|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['./static'],
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: true,
  },
  async viteFinal(config, _options) {
    const env = loadEnv(config.mode!, process.cwd(), '');
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['@emotion/react'],
      },
      resolve: {
        mainFields: ['main', 'module'],
        dedupe: ['@emotion/react'],
      },
      define: { 'process.env': env },
    });
  },
};

export default config;
