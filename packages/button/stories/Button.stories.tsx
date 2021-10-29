import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';
import { Button } from '@realsystem/button';

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
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      mb={10}>
      <Button {...args} mr={10} disabled>
        Default
      </Button>
      <Button {...args} mr={10} intent="danger" disabled>
        Danger
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      mb={10}>
      <Button {...args} mr={10} size="small">
        Small
      </Button>
      <Button {...args} mr={10} intent="danger" size="small">
        Danger
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%">
      <Button {...args} mr={10} size="small" disabled>
        Small
      </Button>
      <Button {...args} mr={10} intent="danger" size="small" disabled>
        Danger
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
      <Button variant="secondary" mr={10}>
        Default
      </Button>
      <Button variant="secondary" mr={10} intent="danger">
        Danger
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      mb={10}>
      <Button variant="secondary" mr={10} disabled>
        Default
      </Button>
      <Button variant="secondary" mr={10} intent="danger" disabled>
        Danger
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      mb={10}>
      <Button variant="secondary" mr={10} size="small">
        Small
      </Button>
      <Button variant="secondary" mr={10} intent="danger" size="small">
        Danger
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%">
      <Button variant="secondary" mr={10} size="small" disabled>
        Small
      </Button>
      <Button variant="secondary" mr={10} intent="danger" size="small" disabled>
        Danger
      </Button>
    </Box>
  </Box>
);

export const Ghost = () => {
  return (
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
        <Button mr={10} variant="ghost">
          Default
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        mb={10}>
        <Button mr={10} variant="ghost" disabled>
          Default
        </Button>
      </Box>
    </Box>
  );
};
