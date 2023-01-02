import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  themes,
  RealSystemProvider,
} from '../packages/libraries/styled-library/src/index';

export const globalTypes = {
  theme: {
    name: 'Real System Theme',
    description: 'Global theme for components',
    defaultValue: 'realSystem',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: Object.keys(themes),
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = themes[context.globals.theme || 'realSystem'];
    return (
      <RealSystemProvider theme={theme}>
        <Story />
      </RealSystemProvider>
    );
  },
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
          ['Overview', 'Theme Customization', 'Design Tokens', 'Token List'],
        ],
        'Components',
        'Layout',
        'Utilities',
        'Primitives',
        'Recipes',
        'Sandbox',
      ],
    },
  },
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
