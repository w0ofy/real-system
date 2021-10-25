import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';
import { Typography } from '@realsystem/typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Button',
    variant: 'primary',
  },
} as Meta;

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});

export const Heading = (args) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
    width="100%">
    <Typography.Heading variant="h1">Heading 1</Typography.Heading>
    <Typography.Heading variant="h2">Heading 2</Typography.Heading>
    <Typography.Heading variant="h3">Heading 3</Typography.Heading>
    <Typography.Heading variant="h4">Heading 4</Typography.Heading>
  </Box>
);

Heading.title = 'Components/Button/Variants/Secondary';
