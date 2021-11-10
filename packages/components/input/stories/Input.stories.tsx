import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@real-system/box';
import { HelpText, Label } from '@real-system/typography';

export default {
  title: 'Components/Input',
  // component: Typography,
} as Meta;

const Template = (args) => {
  return (
    <Box>
      <Label htmlFor="input" required>
        Email
      </Label>
      <input id="input" type="email" name="email-address" {...args} />
      <HelpText>Use your personal email address.</HelpText>
    </Box>
  );
};

export const Default = Template.bind({});
