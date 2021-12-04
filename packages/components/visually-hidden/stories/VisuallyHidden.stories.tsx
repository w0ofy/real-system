import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Typography } from '@real-system/typography';
import { VisuallyHidden } from '@real-system/visually-hidden';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
} as Meta;

const Template = (args) => {
  return (
    <Typography.Label required>
      First Name
      <VisuallyHidden {...args}>Required: </VisuallyHidden>
    </Typography.Label>
  );
};

Template.storyName = 'VisuallyHidden';

export const Default = Template.bind({});
