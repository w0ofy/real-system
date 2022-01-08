import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Spinner } from '@real-system/spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

export const Showcase = (args) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <Spinner {...args} size="xxs" mr={5} />
      <Spinner {...args} size="xs" mr={5} />
      <Spinner {...args} size="sm" mr={5} />
      <Spinner {...args} size="md" mr={5} />
      <Spinner {...args} size="lg" mr={5} />
      <Spinner {...args} size="xl" mr={5} />
      <Spinner {...args} size="xxl" mr={5} />
    </Box>
  );
};
