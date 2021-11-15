import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@real-system/box';
import { Icon, ICON_NAMES } from '@real-system/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: { control: { type: 'select', options: ICON_NAMES } },
  },
  args: {
    icon: 'activity',
    size: 'size-icon-80',
  },
} as Meta;

export const Showcase = () => (
  <Box display="flex">
    <Icon mr={8} icon="box" intent="default" size="size-icon-60" />
    <Icon mr={8} icon="box" intent="primary" size="size-icon-60" />
    <Icon mr={8} icon="box" intent="success" size="size-icon-60" />
    <Icon mr={8} icon="box" intent="info" size="size-icon-60" />
    <Icon mr={8} icon="box" intent="warning" size="size-icon-60" />
    <Icon mr={8} icon="box" intent="danger" size="size-icon-60" />
  </Box>
);

export const Default = (args) => <Icon {...args} />;