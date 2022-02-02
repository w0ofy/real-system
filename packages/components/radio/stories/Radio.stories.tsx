import React from 'react';
import { Meta } from '@storybook/react';

import { Radio, RadioGroup as RealRadioGroup } from '@real-system/radio';

export default {
  title: 'Components/Radio',
  component: RealRadioGroup,
  args: { helpText: 'Choose your single most favorite pet' },
  argTypes: {
    helpText: { type: 'string' },
    errorText: { type: 'string' },
  },
} as Meta;

const Template = (args) => (
  <RealRadioGroup label="Favorite pet" {...args}>
    <Radio value="dog">Dog</Radio>
    <Radio value="cat">Cat</Radio>
    <Radio value="fish">Fish</Radio>
    <Radio value="hamster">Hamster</Radio>
  </RealRadioGroup>
);

export const RadioGroup = Template.bind({});
