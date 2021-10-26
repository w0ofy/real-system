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

const Template = (args) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width="100%">
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      mb={10}>
      <Button {...args} mr={10}>
        Default
      </Button>
      <Button {...args} mr={10} intent="danger">
        Danger
      </Button>
      <Button {...args} intent="success">
        Success
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%">
      <Button {...args} mr={10} size="small">
        Small
      </Button>
      <Button {...args} mr={10} intent="danger" size="small">
        Danger
      </Button>
      <Button {...args} intent="success" size="small">
        Success
      </Button>
    </Box>
  </Box>
);

export const Primary = Template.bind({});

export const Secondary = (args) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width="100%">
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      mb={10}>
      <Button {...args} variant="secondary" mr={10}>
        Default
      </Button>
      <Button {...args} variant="secondary" mr={10} intent="danger">
        Danger
      </Button>
      <Button {...args} variant="secondary" intent="success">
        Success
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%">
      <Button {...args} variant="secondary" mr={10} size="small">
        Small
      </Button>
      <Button
        {...args}
        variant="secondary"
        mr={10}
        intent="danger"
        size="small">
        Danger
      </Button>
      <Button {...args} variant="secondary" intent="success" size="small">
        Success
      </Button>
    </Box>
  </Box>
);

Secondary.title = 'Components/Button/Variants/Secondary';
