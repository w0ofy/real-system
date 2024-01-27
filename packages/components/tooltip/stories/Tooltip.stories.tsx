import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import { Button } from '@real-system/button';
import { Tooltip } from '@real-system/tooltip';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    label: "I'm a Tooltip!",
    placement: 'top',
    disabled: false,
  },
  argTypes: {
    disabled: { type: 'boolean' },
    open: { type: 'boolean' },
    delay: { type: 'number' },
  },
} as Meta;

export const Default = (args) => (
  <Box padding={20}>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </Box>
);

export const TextAsTrigger = (args) => (
  <Box padding={20}>
    <Tooltip {...args}>
      <Text as="span">Hover me</Text>
    </Tooltip>
  </Box>
);
