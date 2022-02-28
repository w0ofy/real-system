import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Truncate } from '@real-system/truncate';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Truncate',
  component: Truncate,
  args: {
    children: 'Some extremely long text to truncate',
    title: 'Some extremely long text to truncate',
  },
} as Meta;

const Template = (args) => (
  <Box maxWidth="17rem">
    <Text>
      <Truncate {...args} />
    </Text>
  </Box>
);

export const Default = Template.bind({});
