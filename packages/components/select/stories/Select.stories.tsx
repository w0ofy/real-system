import * as React from 'react';
import { Meta } from '@storybook/react';

import { Select } from '@real-system/select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
