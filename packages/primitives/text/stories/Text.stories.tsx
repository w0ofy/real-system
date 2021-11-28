import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Text } from '@real-system/text';

export default {
  title: 'Primitive/Text',
  component: Text,
} as Meta;

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
