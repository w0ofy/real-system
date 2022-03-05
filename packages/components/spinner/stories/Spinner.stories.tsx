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
      <Spinner {...args} size="xxs" marginRight={5} />
      <Spinner {...args} size="xs" marginRight={5} />
      <Spinner {...args} size="sm" marginRight={5} />
      <Spinner {...args} size="md" marginRight={5} />
      <Spinner {...args} size="lg" marginRight={5} />
      <Spinner {...args} size="xl" marginRight={5} />
      <Spinner {...args} size="xxl" marginRight={5} />
    </Box>
  );
};
