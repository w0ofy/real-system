import React from 'react';
import { Meta } from '@storybook/react';

import { Real } from '@real-system/element-primitives';

export default {
  title: 'Primitives/Element Primitives',
  component: Real.Button,
} as Meta;

const Template = (args) => <Real.Button {...args} />;

export const Default = Template.bind({});
