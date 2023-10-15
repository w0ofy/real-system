import * as React from 'react';
import type { Meta } from '@storybook/react';

import { ButtonPrimitive } from '@real-system/button-primitive';

export default {
  title: 'Primitives/Button Primitive',
  component: ButtonPrimitive,
  args: {
    children: 'Button Primitive',
  },
} as Meta;

const Template = (args) => <ButtonPrimitive {...args} />;

export const Default = Template.bind({});
