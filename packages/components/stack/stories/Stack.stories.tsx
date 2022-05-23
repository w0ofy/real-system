import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Separator } from '@real-system/separator';
import { Stack, StackDivider } from '@real-system/stack';
import { Heading, Text } from '@real-system/typography';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta;

export const Vertical = () => (
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

export const WithCustomDivider = () => (
  <div>
    <Stack spacing="12px">
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

    <Stack
      spacing="40px"
      divider={<Separator sx={{ borderColor: 'red-200' }} />}>
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
  </div>
);

export const Inline = () => (
  <Stack w="100%" bgColor="blue-500" orientation="row">
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
  </Stack>
);

export const Contained = () => (
  <Stack w="100%" bgColor="blue-500" orientation="row">
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
    <Box size="40px" bgColor="white" borderRadius="xl" />
  </Stack>
);

export const Responsive = () => (
  <Stack orientation={['column', 'row']} spacing="40px" w="100%">
    <div>
      <Text>1</Text>
    </div>
    <div>
      <Text>2</Text>
    </div>
    <div>
      <Text>3</Text>
    </div>
  </Stack>
);

export const WithResponsiveDivider = () => (
  <Stack
    mt={10}
    orientation={['column', 'row']}
    divider={<StackDivider borderColor="green-500" />}
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

export const WithDivider = () => (
  <>
    <Stack divider={<StackDivider />} spacing={4}>
      <Box size="40px" bgColor="yellow-200">
        <Text>1</Text>
      </Box>
      <Box size="40px" bgColor="tomato">
        <Text>2</Text>
      </Box>
      <Box size="40px" bgColor="pink-100">
        <Text>3</Text>
      </Box>
    </Stack>

    <Stack mt={10} orientation="row" divider={<StackDivider />} spacing={4}>
      <Box size="40px" bgColor="yellow-200">
        <Text>1</Text>
      </Box>
      <Box size="40px" bgColor="tomato">
        <Text>2</Text>
      </Box>
      <Box size="40px" bgColor="pink-100">
        <Text>3</Text>
      </Box>
    </Stack>
  </>
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
  <Stack orientation="row" spacing={8}>
    <Feature title="Estimate effort">
      Over-estimate and under-promise so you can always over-deliver.
    </Feature>
    <Feature title="Prioritize things">
      Plan to do the most important things first so you don't waste time on the
      less critical things.
    </Feature>
  </Stack>
);

export const WrappingChildren = () => (
  <Stack shouldWrapChildren>
    <Box>foo</Box>
    <Box>bar</Box>
    <Box>baz</Box>
  </Stack>
);

export const WithResponsiveSpacingAndDirection = () => (
  <Stack
    spacing={['10px', '60px']}
    divider={<StackDivider borderColor="gray-200" />}
    orientation={['column', 'row']}>
    <Box bgColor="red-500">First</Box>
    <Box bgColor="blue-500">Second</Box>
    <Box bgColor="yellow-500">Third</Box>
  </Stack>
);

export const WithCustomBorderColor = () => (
  <Stack
    orientation={{ base: 'column', md: 'row' }}
    divider={<StackDivider borderColor={{ base: 'gray-200', md: 'red-300' }} />}
    spacing={4}>
    <Box w="40px" flexShrink={0} h="40px" bgColor="yellow-200">
      <Text>1</Text>
    </Box>
    <Box w="40px" flexShrink={0} h="40px" bgColor="tomato">
      <Text>2</Text>
    </Box>
    <Box w="40px" flexShrink={0} h="40px" bgColor="pink-100">
      <Text>3</Text>
    </Box>
  </Stack>
);
