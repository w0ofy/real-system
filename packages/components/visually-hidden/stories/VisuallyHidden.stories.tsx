import React from 'react';
import { Meta } from '@storybook/react';

import { Typography } from '@real-system/typography';
import { VisuallyHidden } from '@real-system/visually-hidden';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
} as Meta;

export const Default = (args) => {
  return (
    <Typography.Label required>
      First Name
      <VisuallyHidden {...args}>Required: </VisuallyHidden>
    </Typography.Label>
  );
};
