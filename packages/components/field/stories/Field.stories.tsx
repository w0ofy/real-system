import * as React from 'react';
import { Meta } from '@storybook/react';

import { Checkbox } from '@real-system/checkbox';
import { Field } from '@real-system/field';
import { Input } from '@real-system/input';

const { Group, Area, HelperText, Label } = Field;

export default {
  title: 'Components/Field',
  component: Field,
  subcomponents: { Group, Area, HelperText, Label },
  argTypes: {
    invalid: { type: 'boolean' },
    required: { type: 'boolean' },
    readOnly: { type: 'boolean' },
    disabled: { type: 'boolean' },
  },
} as Meta;

export const Default = (args) => (
  <Field.Group>
    <Field
      width="250px"
      invalid={{
        status: args.invalid,
        message: 'Your first name is required',
      }}>
      <Field.Label htmlFor="firstName">First Name</Field.Label>
      <Input type="text" id="firstName" />
      <Field.HelperText>Please provide your first name</Field.HelperText>
    </Field>
    <Field
      {...args}
      invalid={{ invalid: true, message: 'Your first name is required' }}>
      <Checkbox>I agree to use Real System</Checkbox>
    </Field>
  </Field.Group>
);

export const InlineField = (args) => (
  <Field inline width="400px" {...args}>
    <Field.Area flex={4}>
      <Field.Label htmlFor="fullName" mb={1}>
        Full name
      </Field.Label>
      <Field.HelperText invalid={{ message: 'Your first name is required' }}>
        First, middle and/or last
      </Field.HelperText>
    </Field.Area>
    <Field.Area flex={5}>
      <Input type="text" id="fullName" />
    </Field.Area>
  </Field>
);
