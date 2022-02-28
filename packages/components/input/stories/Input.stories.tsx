import React, { useMemo, useState } from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Button } from '@real-system/button';
import { Icon } from '@real-system/icon';
import { Input as RealInput } from '@real-system/input';
import { HelpText, Label } from '@real-system/typography';

export default {
  title: 'Components/Input',
  component: RealInput,
} as Meta;

const isEmail = (value: string) =>
  value.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
const Container = (props) => <Box marginBottom={15} {...props} />;

export const Showcase = (args) => {
  return (
    <Box width="27rem">
      <Container>
        <Label htmlFor="input">Text (default)</Label>
        <RealInput
          id="input"
          name="email-address"
          placeholder="Real System"
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-1">Email</Label>
        <RealInput
          type="email"
          id="input-1"
          name="email-address"
          placeholder="personal@realsystem.com"
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-2">Number</Label>
        <RealInput
          type="number"
          id="input-2"
          name="email-address"
          placeholder="23"
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-3">With prefix</Label>
        <RealInput
          type="email"
          id="input-3"
          name="email-address"
          placeholder="personal@realsystem.com"
          prefix={<Icon icon="mail" />}
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-4">With suffix</Label>
        <RealInput
          type="email"
          id="input-4"
          name="email-address"
          placeholder="personal@realsystem.com"
          suffix={
            <Button size="sm" variant="floating">
              <Icon icon="information-circle" />
            </Button>
          }
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-5">Password with Readonly</Label>
        <RealInput
          readOnly
          type="password"
          id="input-5"
          name="email-address"
          value="personal@realsystem.com"
          suffix={
            <Button size="sm" variant="floating">
              <Icon icon="clipboard-copy" />
            </Button>
          }
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-6">Disabled</Label>
        <RealInput disabled id="input-6" name="email-address" {...args} />
      </Container>
    </Box>
  );
};

export const Default = (args) => {
  return (
    <Container width="27rem">
      <RealInput
        type="email"
        id="input-1"
        name="email-address"
        placeholder="personal@realsystem.com"
        {...args}
      />
    </Container>
  );
};

export const Composition = (args) => {
  const [value, setValue] = useState('');
  const isEmpty = useMemo(() => !value, [value]);
  const isNotEmail = useMemo(() => !isEmail(value), [value]);

  return (
    <Box width="27rem">
      <Container>
        <Label htmlFor="input-1">Email (required)</Label>
        <RealInput
          type="email"
          id="input-1"
          name="email-address"
          placeholder="personal@realsystem.com"
          {...args}
        />
        <HelpText>Use your personal email address.</HelpText>
      </Container>
      <Container>
        <Label htmlFor="input" required>
          Email (required with error)
        </Label>
        <RealInput
          type="email"
          id="input"
          name="email-address"
          placeholder="personal@realsystem.com"
          onChange={(e) => setValue(e.target.value)}
          error={isEmpty || isNotEmail}
          {...args}
        />
        <HelpText
          errorText={
            isEmpty
              ? 'Field is required'
              : isNotEmail
              ? 'Must be a valid email'
              : ''
          }>
          Use your personal email address.
        </HelpText>
      </Container>
      <Container>
        <Label htmlFor="input-2">Email (prefix)</Label>
        <RealInput
          type="email"
          id="input-2"
          name="email-address"
          placeholder="personal@realsystem.com"
          prefix={<Icon icon="mail" />}
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-3">Email (suffix)</Label>
        <RealInput
          type="email"
          id="input-3"
          name="email-address"
          placeholder="personal@realsystem.com"
          suffix={
            <Button size="sm" variant="floating">
              <Icon icon="information-circle" />
            </Button>
          }
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-4">Email (readonly)</Label>
        <RealInput
          readOnly
          type="email"
          id="input-4"
          name="email-address"
          value="personal@realsystem.com"
          suffix={
            <Button size="sm" variant="floating">
              <Icon icon="clipboard-copy" />
            </Button>
          }
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-5" disabled>
          Email (disabled)
        </Label>
        <RealInput
          disabled
          type="email"
          id="input-5"
          name="email-address"
          value="personal@realsystem.com"
          {...args}
        />
      </Container>
    </Box>
  );
};
