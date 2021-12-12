import React from 'react';
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
    size: 'size-icon-80',
    icon: 'bell',
  },
} as Meta;

export const Showcase = (args) => {
  return (
    <Box display="flex">
      <Icon {...args} mr={8} intent="default" />
      <Icon {...args} mr={8} intent="primary" />
      <Icon {...args} mr={8} intent="success" />
      <Icon {...args} mr={8} intent="info" />
      <Icon {...args} mr={8} intent="warning" />
      <Icon {...args} mr={8} intent="danger" />
    </Box>
  );
};
