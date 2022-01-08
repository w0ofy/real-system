import React from 'react';
import { Meta } from '@storybook/react';

import { Text } from '@real-system/text-primitive';

export default {
  title: 'Primitives/Text',
  component: Text,
} as Meta;

const Template = (args) => (
  <Text {...args}>The quick brown fox jumped over the lazy dog.</Text>
);

export const Default = Template.bind({});
