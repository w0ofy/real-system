import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Truncate } from '@real-system/truncate';
import { Typography } from '@real-system/typography';

export default {
  title: 'Components/Truncate',
  component: Truncate,
  args: {
    children: 'Some extremely long text to truncate',
    title: 'Some extremely long text to truncate',
  },
} as Meta;

const Template = (args) => (
  <Box maxWidth="5rem">
    <Typography>
      <Truncate {...args} />
    </Typography>
  </Box>
);

export const Default = Template.bind({});
