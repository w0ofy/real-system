import * as React from 'react';
import type { Meta } from '@storybook/react';

import { PortalPrimitive } from '@real-system/portal-primitive';

export default {
  title: 'Primitives/Portal Primitive',
  component: PortalPrimitive,
} as Meta;

const Template = () => (
  <PortalPrimitive>Portal primitive content</PortalPrimitive>
);

export const Default = Template.bind({});
