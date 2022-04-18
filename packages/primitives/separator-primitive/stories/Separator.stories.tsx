import * as React from 'react';
import { Meta } from '@storybook/react';

import { SeparatorPrimitive } from '@real-system/separator-primitive';

export default {
  title: 'Primitives/Separator Primitive',
  component: SeparatorPrimitive,
} as Meta;

const Template = (args) => <SeparatorPrimitive {...args} />;

export const Default = Template.bind({});
