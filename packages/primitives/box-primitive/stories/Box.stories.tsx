import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';

export default {
  title: 'Primitives/Box Primitive',
  component: Box,
  args: {
    children:
      'Box—use me as a building block for any kind of component. You can pass style props to me as well.',
  },
} as Meta;

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
