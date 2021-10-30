import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';
import { Icon, ICONS } from '@realsystem/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: { control: { type: 'select', options: ICONS } },
  },
  args: {
    icon: 'Activity',
    size: 'size-icon-80',
  },
} as Meta;

export const Showcase = () => (
  <Box display="flex">
    <Icon mr={8} icon="Box" intent="default" size="size-icon-60" />
    <Icon mr={8} icon="Box" intent="brand" size="size-icon-60" />
    <Icon mr={8} icon="Box" intent="success" size="size-icon-60" />
    <Icon mr={8} icon="Box" intent="warning" size="size-icon-60" />
    <Icon mr={8} icon="Box" intent="danger" size="size-icon-60" />
  </Box>
);

export const Default = (args) => <Icon {...args} />;
