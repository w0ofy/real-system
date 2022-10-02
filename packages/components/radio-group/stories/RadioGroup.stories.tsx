import * as React from 'react';
import { Meta } from '@storybook/react';

import { Field } from '@real-system/field';
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
    invalid: { status: false, message: "There's an error here" },
  },
  argTypes: {
    required: { type: 'boolean' },
    helpText: { type: 'string' },
    invalid: {
      control: 'object',
    },
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
      <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
      <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
      <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
      <RadioGroup.Radio value="hamster" disabled>
        Hamster
      </RadioGroup.Radio>
    </RadioGroup>
  </>
);

export const Inline = (args) => (
  <>
    <Stack.Vertical align="left" spacing={0} mb={6}>
      <Text.Label as="legend" mb={2} htmlFor="inline-radio-group">
        Favorite Pet
      </Text.Label>
      <Text.Help>{args.helpText}</Text.Help>
    </Stack.Vertical>
    <RadioGroup orientation="horizontal" {...args} id="inline-radio-group">
      <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
      <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
      <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
      <RadioGroup.Radio value="hamster">Hamster</RadioGroup.Radio>
    </RadioGroup>
  </>
);

export const DisabledRadioGroup = (args) => (
  <RadioGroup disabled {...args}>
    <Text.Label as="legend" mb={2}>
      Favorite Pet
    </Text.Label>
    <Field.Help mb={6}>{args.helpText}</Field.Help>
    <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
    <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
    <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
    <RadioGroup.Radio value="hamster" disabled>
      Hamster
    </RadioGroup.Radio>
  </RadioGroup>
);

export const RadioGroupWithField = (args) => (
  <Field
    id="favorite-pet-radio-group"
    label="Favorite Pet"
    {...args}
    validation={{ hasError: false, errorMessage: 'There is an error' }}>
    <Stack mb={5}>
      <Field.Label as="legend" />
      <Field.Help>{args.helpText}</Field.Help>
    </Stack>
    <RadioGroup>
      <Stack>
        <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
        <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
        <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
        <RadioGroup.Radio value="hamster" disabled>
          Hamster
        </RadioGroup.Radio>
      </Stack>
      <Field.Error mt={2} />
    </RadioGroup>
  </Field>
);
