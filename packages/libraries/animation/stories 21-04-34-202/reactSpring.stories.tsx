import React from 'react';
import { Meta } from '@storybook/react';

import { reactSpring } from '@real-system/animation';

export default {
  title: 'Librarys/React Spring',
  component: reactSpring,
} as Meta;

const Template = (args) => <reactSpring {...args} />;

export const Default = Template.bind({});
