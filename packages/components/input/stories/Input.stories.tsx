import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import { Button } from '@real-system/button';
import { Icon } from '@real-system/icon';
import { Input } from '@real-system/input';
import { HelpText, Label } from '@real-system/typography';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Container = (props) => <Box mb={15} {...props} />;

const Template = (args) => {
  return (
    <Box width="35rem">
      <Container>
        <Label htmlFor="input" required>
          Email
        </Label>
        <Input
          type="email"
          id="input"
          name="email-address"
          placeholder="personal@realsystem.com"
          {...args}
        />
        <HelpText>Use your personal email address.</HelpText>
      </Container>
      <Container>
        <Label htmlFor="input-1" required>
          Email (prefix)
        </Label>
        <Input
          type="email"
          id="input-1"
          name="email-address"
          placeholder="personal@realsystem.com"
          prefix={<Icon icon="mail" />}
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-2" required>
          Email (suffix)
        </Label>
        <Input
          type="email"
          id="input-2"
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
        <Label htmlFor="input-3" required>
          Email (readonly)
        </Label>
        <Input
          readOnly
          type="email"
          id="input-3"
          name="email-address"
          value="personal@realsystem.com"
          suffix={
            <Button size="sm" variant="floating" intent="default">
              <Icon icon="clipboard-copy" />
            </Button>
          }
          {...args}
        />
      </Container>
      <Container>
        <Label htmlFor="input-4" required disabled>
          Email (disabled)
        </Label>
        <Input
          disabled
          type="email"
          id="input-4"
          name="email-address"
          value="personal@realsystem.com"
          {...args}
        />
      </Container>
    </Box>
  );
};

export const Showcase = Template.bind({});
