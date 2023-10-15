import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Box } from '@real-system/box';

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    children:
      'Box. use me for building layouts, wrappers and containers for other components. You can pass style props to me as well.',
  },
} as Meta;

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
