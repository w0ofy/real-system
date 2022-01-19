import React from 'react';
import { Meta } from '@storybook/react';

import { PortalPrimitive } from '@real-system/portal-primitive';

export default {
  title: 'Primitives/PortalPrimitive',
  component: PortalPrimitive,
} as Meta;

const Template = () => (
  <PortalPrimitive>Portal primitive content</PortalPrimitive>
);

export const Default = Template.bind({});
