import * as React from 'react';
import { Meta } from '@storybook/react';

import { PinInput, PinInputField } from '@real-system/pin-input';

export default {
  title: 'Components/Pin Input',
  component: PinInput,
  subcomponents: { PinInputField },
} as Meta;

export const Default = (args) => (
  <PinInput {...args}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
);

export const Masked = () => (
  <PinInput mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
);
