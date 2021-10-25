import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/core/box';
import { Button } from '@realsystem/core/button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = (args) => (
  <Box
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    width="100%">
    <Button {...args} variant="secondary" />
    <Button {...args} variant="secondary" size="small" />
  </Box>
);

Secondary.title = 'Components/Button/Variants/Secondary';
