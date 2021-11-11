import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@real-system/box';
import { Input } from '@real-system/input';
import { HelpText, Label } from '@real-system/typography';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template = (args) => {
  return (
    <Box width="30rem">
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
    </Box>
  );
};

export const Default = Template.bind({});
