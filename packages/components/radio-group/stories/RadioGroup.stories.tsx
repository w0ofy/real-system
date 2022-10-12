import * as React from 'react';
import { Meta } from '@storybook/react';

import { RadioGroup } from '@real-system/radio-group';
import { Stack } from '@real-system/stack';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Radio Group',
  component: RadioGroup,
  subcomponents: { Radio: RadioGroup.Radio },
  args: {
    required: false,
    helpText: 'Choose your single most favorite pet',
    errorMessage: 'There is an error',
  },
  argTypes: {
    required: { type: 'boolean' },
    hasError: { type: 'boolean' },
    helpText: { type: 'string' },
  },
} as Meta;

export const Default = (args) => (
  <>
    <Stack.Vertical align="left" spacing={0} mb={6}>
      <Text.Label
        as="legend"
        mb={2}
        htmlFor="radio-group"
        required={args.required}>
        Favorite Pet
      </Text.Label>
      <Text.Help>{args.helpText}</Text.Help>
    </Stack.Vertical>
    <RadioGroup id="radio-group" {...args}>
      <Stack.Horizontal spacing={5}>
        <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
        <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
        <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
        <RadioGroup.Radio value="hamster" disabled>
          Hamster
        </RadioGroup.Radio>
      </Stack.Horizontal>
    </RadioGroup>
  </>
);

export const Stacked = (args) => (
  <>
    <Stack.Vertical align="left" spacing={2} mb={6}>
      <Text.Label as="legend" htmlFor="inline-radio-group">
        Favorite Pet
      </Text.Label>
      <Text.Help>{args.helpText}</Text.Help>
    </Stack.Vertical>
    <RadioGroup {...args} id="inline-radio-group">
      <Stack.Vertical spacing={5} align="left">
        <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
        <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
        <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
        <RadioGroup.Radio value="hamster">Hamster</RadioGroup.Radio>
      </Stack.Vertical>
    </RadioGroup>
  </>
);

export const DisabledRadioGroup = (args) => (
  <>
    <Stack.Vertical align="left" spacing={2} mb={6}>
      <Text.Label as="legend" htmlFor="inline-radio-group">
        Favorite Pet
      </Text.Label>
      <Text.Help>{args.helpText}</Text.Help>
    </Stack.Vertical>
    <RadioGroup {...args} disabled id="inline-radio-group">
      <Stack.Vertical spacing={5} align="left">
        <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
        <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
        <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
        <RadioGroup.Radio value="hamster">Hamster</RadioGroup.Radio>
      </Stack.Vertical>
    </RadioGroup>
  </>
);

export const DisabledRadio = (args) => (
  <>
    <Stack.Vertical align="left" spacing={2} mb={6}>
      <Text.Label as="legend" htmlFor="inline-radio-group">
        Favorite Pet
      </Text.Label>
      <Text.Help>{args.helpText}</Text.Help>
    </Stack.Vertical>
    <RadioGroup {...args} id="inline-radio-group">
      <Stack.Vertical spacing={5} align="left">
        <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
        <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
        <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
        <RadioGroup.Radio value="hamster" disabled>
          Hamster
        </RadioGroup.Radio>
      </Stack.Vertical>
    </RadioGroup>
  </>
);
