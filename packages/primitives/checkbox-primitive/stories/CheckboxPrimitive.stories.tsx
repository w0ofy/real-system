import * as React from 'react';
import { Meta } from '@storybook/react';

import { CheckboxPrimitive } from '@real-system/checkbox-primitive';

export default {
  title: 'Primitives/Checkbox Primitive',
  component: CheckboxPrimitive,
} as Meta;

const Template = (args) => <CheckboxPrimitive {...args} />;

export const Default = Template.bind({});
