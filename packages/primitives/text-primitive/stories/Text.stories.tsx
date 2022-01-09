import React from 'react';
import { Meta } from '@storybook/react';

import { TextPrimitive } from '@real-system/text-primitive';

export default {
  title: 'Primitives/TextPrimitive',
  component: TextPrimitive,
} as Meta;

const Template = (args) => (
  <TextPrimitive {...args}>
    The quick brown fox jumped over the lazy dog.
  </TextPrimitive>
);

export const Default = Template.bind({});
