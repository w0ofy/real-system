import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import { Field, FieldGroup } from '@real-system/field';
import { Input } from '@real-system/input';
import { HelpText, Label } from '@real-system/typography';

export default {
  title: 'Components/Field',
  component: Field,
  subcomponents: { FieldGroup },
} as Meta;

export const Default = (args) => (
  <Field
    inline
    label="First name"
    labelFor="firstName"
    helpText="Provide your first name"
    required
    {...args}>
    <Input type="text" id="firstName" />
  </Field>
);

export const WithError = () => (
  <Field
    inline
    label="First name"
    labelFor="firstName"
    helpText="Provide your first name"
    errorText="This field is required"
    required>
    <Input type="text" id="firstName" />
  </Field>
);

export const StoryFieldGroup = () => (
  <form>
    <FieldGroup mb={8}>
      <Field inline label="First name" labelFor="firstName" required>
        <Input type="text" id="firstName" />
      </Field>
      <Field label="Last name" labelFor="lastName" required>
        <Input type="text" id="lastName" />
      </Field>
      <Field label="Phone number" labelFor="phoneNumber">
        <Input type="tel" id="phoneNumber" />
      </Field>
    </FieldGroup>
    <Button type="reset" variant="primary">
      Submit
    </Button>
  </form>
);

StoryFieldGroup.storyName = 'Field Group';

export const InlineFieldGroup = () => (
  <form>
    <FieldGroup inline mb={8}>
      <Field inline label="First name" labelFor="firstName" required>
        <Input type="text" id="firstName" />
      </Field>
      <Field label="Last name" labelFor="lastName" required>
        <Input type="text" id="lastName" />
      </Field>
      <Field label="Phone number" labelFor="phoneNumber">
        <Input type="tel" id="phoneNumber" />
      </Field>
    </FieldGroup>
    <Button type="reset" variant="primary">
      Submit
    </Button>
  </form>
);

export const WithoutBuiltins = () => (
  <form>
    <FieldGroup>
      <Field builtIns={false}>
        <Label htmlFor="firstName" required>
          First name
        </Label>
        <Input type="text" id="firstName" />
        <HelpText>Provide your first name</HelpText>
      </Field>
      <Field builtIns={false}>
        <Label htmlFor="lastName" required>
          Last name
        </Label>
        <Input type="text" id="lastName" />
        <HelpText>Provide your last name</HelpText>
      </Field>
      <Field builtIns={false}>
        <Label htmlFor="phoneNumber">Phone number</Label>
        <Input type="tel" id="phoneNumber" />
      </Field>
      <Button type="reset" variant="primary">
        Submit
      </Button>
    </FieldGroup>
  </form>
);

WithoutBuiltins.storyName = 'Without Built-ins';
