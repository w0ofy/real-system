import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Separator } from '@real-system/separator';
import { Stack, StackSeparator } from '@real-system/stack';
import { Heading, Text } from '@real-system/typography';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta;

export const Default = () => (
  <Stack spacing={4}>
    <span>
      <Text>ooooooo</Text>
    </span>
    <span>
      <Text>ahhhhh</Text>
    </span>
    <span>
      <Text>Woah!</Text>
    </span>
  </Stack>
);

export const VerticalStack = () => (
  <Stack.Vertical spacing={4}>
    <span>
      <Text>ooooooo</Text>
    </span>
    <span>
      <Text>ahhhhh</Text>
    </span>
    <span>
      <Text>Woah!</Text>
    </span>
  </Stack.Vertical>
);

export const HorizontalStack = () => (
  <Stack.Horizontal spacing={4}>
    <span>
      <Text>ooooooo</Text>
    </span>
    <span>
      <Text>ahhhhh</Text>
    </span>
    <span>
      <Text>Woah!</Text>
    </span>
  </Stack.Horizontal>
);

export const Inline = () => (
  <Stack w="100%" bgColor="blue-500" inline>
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
  </Stack>
);

export const Contained = () => (
  <Stack w="100%" bgColor="blue-500" inline>
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
  </Stack>
);

export const Responsive = () => (
  <Stack direction={['column', 'row', 'row']} spacing="40px" w="100%">
    <Stack.Item>
      <Text>1</Text>
    </Stack.Item>
    <Stack.Item>
      <Text>2</Text>
    </Stack.Item>
    <Stack.Item>
      <Text>3</Text>
    </Stack.Item>
  </Stack>
);

export const ResponsiveSpacingAndDirection = () => (
  <Stack
    spacing={['10px', '60px']}
    separator={<StackSeparator borderColor="gray-200" />}
    direction={['column', 'row']}>
    <Box bgColor="red-500">First</Box>
    <Box bgColor="blue-500">Second</Box>
    <Box bgColor="yellow-500">Third</Box>
  </Stack>
);

export const ResponseWithSeparator = () => (
  <Stack
    mt={10}
    direction={['column', 'row']}
    separator={<StackSeparator borderColor="gray-200" />}
    spacing={4}>
    <Box flex="1" w={['100%', '40px']} h="40px" bgColor="yellow-200">
      <Text>1</Text>
    </Box>
    <Box flex="1" w={['100%', '40px']} h="40px" bgColor="tomato">
      <Text>2</Text>
    </Box>
    <Box flex="1" w={['100%', '40px']} h="40px" bgColor="pink-100">
      <Text>3</Text>
    </Box>
  </Stack>
);

function Feature({ title, children, ...rest }: any) {
  return (
    <Box
      padding={5}
      boxShadow="dialog"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      {...rest}>
      <Heading size="h3">{title}</Heading>
      <Text mt={7} fontSize="h5" lineHeight="h4">
        {children}
      </Text>
    </Box>
  );
}

export const WithContent = () => (
  <Stack direction="row" spacing={8}>
    <Feature title="Estimate effort">
      Over-estimate and under-promise so you can always over-deliver.
    </Feature>
    <Feature title="Prioritize things">
      Plan to do the most important things first so you don't waste time on the
      less critical things.
    </Feature>
  </Stack>
);

export const WithCustomSeparator = () => (
  <Stack spacing="40px" separator={<Separator borderColor="red-200" />}>
    <Box>
      <Text>1</Text>
    </Box>
    <Box>
      <Text>2</Text>
    </Box>
    <Box>
      <Text>3</Text>
    </Box>
  </Stack>
);
