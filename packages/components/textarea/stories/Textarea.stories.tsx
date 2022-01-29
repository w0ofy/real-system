import React from 'react';
import { Meta } from '@storybook/react';

import { Icon } from '@real-system/icon';
import { Textarea } from '@real-system/textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template = (args) => (
  <Textarea prefix={<Icon icon="information-circle" />} {...args} />
);

export const Default = Template.bind({});
