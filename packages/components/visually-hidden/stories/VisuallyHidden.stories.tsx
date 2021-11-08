import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Typography } from '@real-system/typography';
import { VisuallyHidden } from '@real-system/visually-hidden';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'primary',
  },
} as Meta;

const Template = (args) => {
  return (
    <Typography>
      * First Name
      <VisuallyHidden {...args}>Required:</VisuallyHidden>
    </Typography>
  );
};

Template.storyName = 'VisuallyHidden';

export const Default = Template.bind({});
