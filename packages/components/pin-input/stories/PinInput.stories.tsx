import * as React from 'react';
import type { Meta } from '@storybook/react';

import { PinInput } from '@real-system/pin-input';

export default {
  title: 'Components/Pin Input',
  component: PinInput,
  subcomponents: { Field: PinInput.Field },
} as Meta;

/**
 * @todo add docs for hook example
 */

export const Default = (args) => (
  <PinInput {...args}>
    <PinInput.Field />
    <PinInput.Field />
    <PinInput.Field />
    <PinInput.Field />
  </PinInput>
);

export const Masked = () => (
  <PinInput mask>
    <PinInput.Field />
    <PinInput.Field />
    <PinInput.Field />
    <PinInput.Field />
  </PinInput>
);

export const Controlled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleComplete = (value: string) => {
    console.log(value);
  };

  return (
    <PinInput value={value} onChange={handleChange} onComplete={handleComplete}>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
};
