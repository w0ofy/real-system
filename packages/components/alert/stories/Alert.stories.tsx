import React from 'react';
import { Meta } from '@storybook/react';

import { Alert, InlineAlert as RealInlineAlert } from '@real-system/alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { InlineAlert: RealInlineAlert },
  args: {
    cta: {
      label: 'View integrations',
      onPress: () => undefined,
    },
    title: 'There are over 200 integrations available',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
} as Meta;

export const Default = (args) => <Alert {...args} />;

export const InlineAlert = (args) => (
  <RealInlineAlert {...args}>{args.title}</RealInlineAlert>
);
