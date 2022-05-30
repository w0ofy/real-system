import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
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
      <Icon {...args} marginRight={8} size="xxs" />
      <Icon {...args} marginRight={8} size="xs" />
      <Icon {...args} marginRight={8} size="sm" />
      <Icon {...args} marginRight={8} size="md" />
      <Icon {...args} marginRight={8} size="lg" />
      <Icon {...args} marginRight={8} size="xl" />
      <Icon {...args} marginRight={8} size="xxl" />
    </Box>
  );
};
