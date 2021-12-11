import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@real-system/box';
import { Icon, ICON_NAMES, Icons } from '@real-system/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: { control: { type: 'select', options: ICON_NAMES } },
  },
  args: {
    icon: 'bell-icon' as Icons,
    size: 'size-icon-80',
  },
} as Meta;

export const Showcase = (args) => (
  <Box display="flex">
    <Icon mr={8} icon={args.icon} intent="default" size="size-icon-80" />
    <Icon mr={8} icon={args.icon} intent="primary" size="size-icon-80" />
    <Icon mr={8} icon={args.icon} intent="success" size="size-icon-80" />
    <Icon mr={8} icon={args.icon} intent="info" size="size-icon-80" />
    <Icon mr={8} icon={args.icon} intent="warning" size="size-icon-80" />
    <Icon mr={8} icon={args.icon} intent="danger" size="size-icon-80" />
  </Box>
);
