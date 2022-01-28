import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Icon, ICONS_LIST } from '@real-system/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: { control: 'select', options: ICONS_LIST },
    solid: { control: 'boolean' },
  },
  args: {
    size: 'md',
    icon: 'external-link',
  },
} as Meta;

export const Showcase = (args) => {
  return (
    <Box display="flex">
      <Icon {...args} mr={8} size="xxs" />
      <Icon {...args} mr={8} size="xs" />
      <Icon {...args} mr={8} size="sm" />
      <Icon {...args} mr={8} size="md" />
      <Icon {...args} mr={8} size="lg" />
      <Icon {...args} mr={8} size="xl" />
      <Icon {...args} mr={8} size="xxl" />
    </Box>
  );
};
