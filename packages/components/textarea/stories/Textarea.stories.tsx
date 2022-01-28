import React from 'react';
import { Meta } from '@storybook/react';

import { Icon } from '@real-system/icon';
import { TextArea } from '@real-system/textarea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta;

const Template = (args) => (
  <TextArea prefix={<Icon icon="information-circle" />} {...args} />
);

export const Default = Template.bind({});
