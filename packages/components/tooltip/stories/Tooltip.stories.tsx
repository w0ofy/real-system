import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import { Tooltip } from '@real-system/tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    label: "I'm a Tooltip!",
    ariaLabel: "I'm a Tooltip!",
    placement: 'top-center',
    disabled: false,
  },
  argTypes: {
    disabled: { type: 'boolean' },
    delayEnter: { type: 'number' },
    delayLeave: { type: 'number' },
  },
} as Meta;

export const Default = (args) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

export const TextAsTrigger = (args) => <Tooltip {...args}>trigger</Tooltip>;
