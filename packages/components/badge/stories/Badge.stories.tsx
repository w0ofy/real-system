import * as React from 'react';
import { Meta } from '@storybook/react';

import { Badge } from '@real-system/badge';
import { Flex } from '@real-system/flex';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

export const Default = (args) => {
  return (
    <Flex gap={3} yAlignContent="center">
      <Badge {...args}>Default</Badge>
      <Badge {...args} colorScheme="blue">
        Info
      </Badge>
      <Badge {...args} colorScheme="green">
        Success
      </Badge>
      <Badge {...args} colorScheme="red">
        Danger
      </Badge>
      <Badge {...args} colorScheme="purple">
        New
      </Badge>
    </Flex>
  );
};

export const Sizes = (args) => {
  return (
    <Flex gap={3} yAlignContent="center">
      <Badge {...args} colorScheme="pink" size="xs">
        Extra Small
      </Badge>{' '}
      <Badge {...args} colorScheme="pink" size="sm">
        Small
      </Badge>
      <Badge {...args} colorScheme="teal">
        Medium
      </Badge>
      <Badge {...args} colorScheme="cyan" size="lg">
        Large
      </Badge>
      <Badge {...args} colorScheme="cyan" size="xl">
        Extra large
      </Badge>
      <Badge {...args} colorScheme="cyan" fontSize={3}>
        Custom
      </Badge>
    </Flex>
  );
};
