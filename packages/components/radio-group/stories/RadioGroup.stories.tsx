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
    helperText: 'Choose your single most favorite pet',
    invalid: { status: false, message: "There's an error here" },
  },
  argTypes: {
    required: { type: 'boolean' },
    helperText: { type: 'string' },
    invalid: {
      control: 'object',
    },
  },
} as Meta;

export const Default = (args) => (
  <>
    <Stack.Vertical align="left" spacing={0} mb={6} {...args}>
      <Text.Label as="legend" mb={2} htmlFor="radio-group">
        Favorite Pet
      </Text.Label>
      <Text.Helper>{args.helperText}</Text.Helper>
    </Stack.Vertical>
    <RadioGroup id="radio-group">
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
      <Text.Helper>{args.helperText}</Text.Helper>
    </Stack.Vertical>
    <RadioGroup orientation="horizontal" {...args} id="inline-radio-group">
      <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
      <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
      <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
      <RadioGroup.Radio value="hamster" disabled>
        Hamster
      </RadioGroup.Radio>
    </RadioGroup>
  </>
);

export const FieldRadioGroup = (args) => (
  <Field id="favorite-pet-radio-group" {...args}>
    <RadioGroup>
      <Field.Label as="legend" mb={2}>
        Favorite Pet
      </Field.Label>
      <Field.HelperText mb={6}>{args.helperText}</Field.HelperText>
      <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
      <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
      <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
      <RadioGroup.Radio value="hamster" disabled>
        Hamster
      </RadioGroup.Radio>
      <Field.ErrorText mt={2} />
    </RadioGroup>
  </Field>
);
