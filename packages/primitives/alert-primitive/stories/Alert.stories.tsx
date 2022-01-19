import React from 'react';
import { Meta } from '@storybook/react';

import { AlertPrimitive } from '@real-system/alert-primitive';

export default {
  title: 'Primitives/AlertPrimitive',
  component: AlertPrimitive,
} as Meta;

const Template = () => <AlertPrimitive>Alert primitive Content</AlertPrimitive>;

export const Default = Template.bind({});
