import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';
import { Button } from '@realsystem/button';
import { Icon } from '@realsystem/icon';

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
      <Button {...args} mr={10} trailingIcon={<Icon icon="Download" />}>
        Default
      </Button>
      <Button
        {...args}
        mr={10}
        intent="danger"
        trailingIcon={<Icon icon="Trash2" />}>
        Danger
      </Button>
      <Button {...args} mr={10}>
        <Icon icon="Download" />
      </Button>
      <Button {...args} mr={10} intent="danger">
        <Icon icon="Trash2" />
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
      <Button
        {...args}
        mr={10}
        trailingIcon={<Icon icon="Download" />}
        disabled>
        Default
      </Button>
      <Button
        {...args}
        mr={10}
        intent="danger"
        trailingIcon={<Icon icon="Trash2" />}
        disabled>
        Danger
      </Button>
      <Button {...args} mr={10} disabled>
        <Icon icon="Download" />
      </Button>
      <Button {...args} mr={10} intent="danger" disabled>
        <Icon icon="Trash2" />
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
      <Button {...args} mr={10} size="small">
        <Icon icon="Download" size="size-icon-10" />
      </Button>
      <Button {...args} mr={10} intent="danger" size="small">
        <Icon icon="Trash2" size="size-icon-10" />
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
      <Button
        mr={10}
        variant="secondary"
        trailingIcon={<Icon icon="Download" />}>
        Default
      </Button>
      <Button
        variant="secondary"
        mr={10}
        intent="danger"
        trailingIcon={<Icon icon="Trash2" />}>
        Danger
      </Button>
      <Button mr={10} variant="secondary">
        <Icon icon="Download" />
      </Button>
      <Button variant="secondary" mr={10} intent="danger">
        <Icon icon="Trash2" />
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
      <Button
        mr={10}
        variant="secondary"
        trailingIcon={<Icon icon="Download" />}
        disabled>
        Default
      </Button>
      <Button
        variant="secondary"
        mr={10}
        intent="danger"
        trailingIcon={<Icon icon="Trash2" />}
        disabled>
        Danger
      </Button>
      <Button mr={10} variant="secondary" disabled>
        <Icon icon="Download" />
      </Button>
      <Button variant="secondary" mr={10} intent="danger" disabled>
        <Icon icon="Trash2" />
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
