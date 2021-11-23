import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { {{pkg}} } from '@real-system/{{pkg}}';

export default {
  title: 'Components/{{pkg}}',
  component: {{component}},
} as Meta;

const Showcase = (args) => {
  return <{{component}} {...args} />
}