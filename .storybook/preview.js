import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPerformance } from 'storybook-addon-performance';
import { THEMES, ThemeProvider } from '@realsystem/core/theme';

export const globalTypes = {
  theme: {
    name: 'Real System Theme',
    description: 'Global theme for components',
    defaultValue: 'DEFAULT',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['DEFAULT'],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = THEMES[context.globals.theme || 'DEFAULT'];
    return (
      <ThemeProvider theme={theme()}>
        <Story />
      </ThemeProvider>
    );
  },
  withPerformance,
];

export const parameters = {
  title: 'Real System',
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
