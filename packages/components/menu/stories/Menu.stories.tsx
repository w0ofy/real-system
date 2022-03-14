import React from 'react';
import { Meta } from '@storybook/react';

import { Menu } from '@real-system/menu';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
