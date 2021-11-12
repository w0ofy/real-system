import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@real-system/box';
import { Spinner } from '@real-system/spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

export const Showcase = (args) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <Spinner {...args} size="size-icon-10" mr={5} />
      <Spinner {...args} size="size-icon-20" mr={5} />
      <Spinner {...args} size="size-icon-30" mr={5} />
      <Spinner {...args} size="size-icon-40" mr={5} />
      <Spinner {...args} size="size-icon-50" mr={5} />
      <Spinner {...args} size="size-icon-60" mr={5} />
      <Spinner {...args} size="size-icon-70" mr={5} />
      <Spinner {...args} size="size-icon-80" mr={5} />
      <Spinner {...args} size="size-icon-90" mr={5} />
      <Spinner {...args} size="size-icon-100" mr={5} />
      <Spinner {...args} size="size-icon-110" mr={5} />
    </Box>
  );
};
