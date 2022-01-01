import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPerformance } from 'storybook-addon-performance';
import { themes, ThemeProvider } from '../packages/libraries/theme/src/index';

const isProduction = process.env.NODE_ENV === 'production';

export const globalTypes = {
  theme: {
    name: 'Real System Theme',
    description: 'Global theme for components',
    defaultValue: 'realsystem',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['realsystem'],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = themes[context.globals.theme || 'realsystem'];
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
  withPerformance,
];

export const parameters = {
  title: 'Real System',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Real System',
        [
          'Getting Started',
          'Theming',
          ['Overview', 'Token System', 'Tokens', 'Scales', 'Advanced'],
        ],
        'Components',
        'Primitives',
        'Sandbox',
      ],
    },
  },
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  playroom: {
    url: isProduction ? '/playroom/' : undefined,
    disable: true,
  },
  previewTabs: {
    'storybook/playroom/panel': {
      hidden: true,
    },
  },
};
