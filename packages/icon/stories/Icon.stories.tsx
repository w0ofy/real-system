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
    size: 'size-icon-80',
    mr: 8,
  },
} as Meta;

const Template = (args) => (
  <Box display="flex">
    <Icon {...args} icon="Box" intent="default" />
    <Icon {...args} icon="Box" intent="brand" />
    <Icon {...args} icon="Box" intent="success" />
    <Icon {...args} icon="Box" intent="warning" />
    <Icon {...args} icon="Box" intent="danger" />
  </Box>
);
// export const Playground = (args) => <Icon  />;

export const Default = Template.bind({});
