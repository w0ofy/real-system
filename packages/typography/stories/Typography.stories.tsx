import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@real-system/box';
import { Typography } from '@real-system/typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'primary',
  },
} as Meta;

const Template = (args) => {
  return (
    <>
      <Typography {...args}>
        The quick brown fox jumps over the{' '}
        <Typography {...args} variant="inline" fontWeight={3}>
          lazy
        </Typography>{' '}
        dog.
      </Typography>
    </>
  );
};

Template.storyName = 'Typography';

export const Default = Template.bind({});

export const Heading = () => (
  <Box display="flex" flexDirection="column">
    <Typography.Heading as="h1" variant="heading1">
      Heading 1
    </Typography.Heading>
    <Typography.Heading as="h2" variant="heading2">
      Heading 2
    </Typography.Heading>
    <Typography.Heading as="h3" variant="heading3">
      Heading 3
    </Typography.Heading>
    <Typography.Heading as="h4" variant="heading4">
      Heading 4
    </Typography.Heading>
    <Typography.Heading as="h5" variant="heading5">
      Heading 5
    </Typography.Heading>
    <Typography.Heading as="h6" variant="heading6">
      Heading 6
    </Typography.Heading>
  </Box>
);

Heading.title = 'Components/Button/Variants/Secondary';
