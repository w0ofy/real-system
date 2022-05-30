import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Box } from '@real-system/box';
import { Flex, FlexProps } from '@real-system/flex';
import { Text } from '@real-system/typography';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

export const Default: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <Flex>
      <Box backgroundColor="gray-100" padding={8}>
        <Text>Left item</Text>
      </Box>
    </Flex>
    <Flex grow>
      <Box backgroundColor="blue-100" padding={8} width="100%">
        <Text>Right item</Text>
      </Box>
    </Flex>
  </Flex>
);

export const Vertical: Story<FlexProps> = () => (
  <Flex vertical>
    <Flex grow>
      <Box backgroundColor="gray-100" padding={8} width="100%">
        <Text>Left item</Text>
      </Box>
    </Flex>
    <Flex grow>
      <Box backgroundColor="blue-100" padding={8} width="100%">
        <Text>Right item</Text>
      </Box>
    </Flex>
  </Flex>
);

export const Wrapping: Story<FlexProps> = () => (
  <Flex wrap>
    <Flex basis={900}>
      <Box backgroundColor="gray-100" padding={8} width="100%">
        <Text>Left item</Text>
      </Box>
    </Flex>
    <Flex>
      <Box backgroundColor="blue-100" padding={8} width="100%">
        <Text>Right item</Text>
      </Box>
    </Flex>
  </Flex>
);

export const VerticalAlignment: Story<FlexProps> = () => (
  <Flex yAlignContent="center">
    <Flex grow>
      <Box backgroundColor="gray-100" padding={8} width="100%">
        <Text>Left item</Text>
      </Box>
    </Flex>
    <Flex grow>
      <Box backgroundColor="blue-100" padding={8} width="100%" height={120}>
        <Text>Right item</Text>
      </Box>
    </Flex>
  </Flex>
);

export const HorizontalAlignment: Story<FlexProps> = () => (
  <Flex xAlignContent="center">
    <Flex width="50%">
      <Box
        width="100%"
        textAlign="center"
        backgroundColor="gray-100"
        padding={8}>
        <Text>Left item</Text>
      </Box>
    </Flex>
    <Flex width="50%">
      <Box
        width="100%"
        textAlign="center"
        backgroundColor="blue-100"
        padding={8}>
        <Text>Right item</Text>
      </Box>
    </Flex>
  </Flex>
);
