import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';

export default {
  title: 'Primitives/Box',
  component: Box,
  args: {
    children: 'Box',
  },
} as Meta;

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
