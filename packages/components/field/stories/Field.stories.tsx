import * as React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import { Field } from '@real-system/field';
import { Input } from '@real-system/input';
import { Select, SelectContainer, SelectItem } from '@real-system/select';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Field',
  component: Field,
  subcomponents: {
    FieldGroup: Field.Group,
    FieldLabel: Field.Label,
    FieldHelpText: Field.Help,
    FieldErrorText: Field.Error,
    FieldWarningText: Field.Warning,
  },
} as Meta;

export const Default = (args) => (
  <Field inline id="first-name" required {...args}>
    <Field.Label>First name</Field.Label>
    <Input type="text" id="first-name" />
    <Field.Help>Provide your first name</Field.Help>
  </Field>
);

export const WithError = () => (
  <Field
    id="first-name"
    inline
    invalid={{ status: true, message: 'This field is required' }}
    required>
    <Field.Label>First name</Field.Label>
    <Input type="text" id="first-name" />
    <Field.Help>Provide your first name</Field.Help>
  </Field>
);

export const FieldGroupStory = () => (
  <form>
    <Field.Group marginBottom={8} width="200px">
      <Field label="First name" labelFor="first-name" width="100%" required>
        <Input type="text" id="firstName" />
      </Field>
      <Field label="Last name" labelFor="last-name" width="100%" required>
        <Input type="text" id="lastName" />
      </Field>
      <Field label="Phone number" width="100%" id="phone-number">
        <Input type="tel" id="phoneNumber" />
      </Field>
      <Field width="100%">
        <SelectContainer>
          <Text.Label>Engineering Level</Text.Label>
          <Select>
            <SelectItem value="L1">L1 (Associate)</SelectItem>
            <SelectItem value="L2">L2 (Mid)</SelectItem>
            <SelectItem value="L3">L3 (Senior)</SelectItem>
            <SelectItem value="L4">L4 (Staff)</SelectItem>
          </Select>
        </SelectContainer>
      </Field>
    </Field.Group>
    <Button type="reset" variant="fill">
      Submit
    </Button>
  </form>
);

FieldGroupStory.storyName = 'Field Group';

export const InlineFieldGroup = () => (
  <form>
    <Field.Group inline marginBottom={8} width="100%">
      <Field label="First name" id="firstName" width="20%" required>
        <Input type="text" id="firstName" />
      </Field>
      <Field label="Last name" id="lastName" width="20%" required>
        <Input type="text" id="lastName" />
      </Field>
      <Field label="Phone number" id="phoneNumber" width="20%">
        <Input type="tel" id="phoneNumber" />
      </Field>
      <Field width="20%">
        <SelectContainer>
          <Text.Label>Engineering Level</Text.Label>
          <Select>
            <SelectItem value="L1">L1 (Associate)</SelectItem>
            <SelectItem value="L2">L2 (Mid)</SelectItem>
            <SelectItem value="L3">L3 (Senior)</SelectItem>
            <SelectItem value="L4">L4 (Staff)</SelectItem>
          </Select>
        </SelectContainer>
      </Field>
    </Field.Group>
    <Button type="reset" variant="fill">
      Submit
    </Button>
  </form>
);

export const WithoutBuiltins = () => (
  <form>
    <Field.Group width="200px">
      <Field width="100%">
        <Text.Label htmlFor="firstName" required>
          First name
        </Text.Label>
        <Input type="text" id="firstName" />
        <Text.Help>Provide your first name</Text.Help>
      </Field>
      <Field width="100%">
        <Text.Label htmlFor="lastName" required>
          Last name
        </Text.Label>
        <Input type="text" id="lastName" />
        <Text.Help>Provide your last name</Text.Help>
      </Field>
      <Field width="100%">
        <Text.Label htmlFor="phoneNumber">Phone number</Text.Label>
        <Input type="tel" id="phoneNumber" />
      </Field>
      <Field width="100%">
        <SelectContainer>
          <Text.Label>Engineering Level</Text.Label>
          <Select>
            <SelectItem value="L1">L1 (Associate)</SelectItem>
            <SelectItem value="L2">L2 (Mid)</SelectItem>
            <SelectItem value="L3">L3 (Senior)</SelectItem>
            <SelectItem value="L4">L4 (Staff)</SelectItem>
          </Select>
        </SelectContainer>
      </Field>
      <Button type="reset" variant="fill">
        Submit
      </Button>
    </Field.Group>
  </form>
);

WithoutBuiltins.storyName = 'Without Built-ins';
