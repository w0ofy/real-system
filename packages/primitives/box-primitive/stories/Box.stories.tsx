import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';

export default {
  title: 'Primitives/Box',
  component: Box,
  args: {
    children: 'Box',
  },
} as Meta;

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
