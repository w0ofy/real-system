import React from 'react';
import { Meta } from '@storybook/react';

import { ButtonPrimitive } from '@real-system/button-primitive';

export default {
  title: 'Primitives/Button Primitive',
  component: ButtonPrimitive,
  args: {
    children: 'Button Primitive',
    onClick: undefined,
  },
} as Meta;

const Template = (args) => <ButtonPrimitive {...args} />;

export const Default = Template.bind({});
