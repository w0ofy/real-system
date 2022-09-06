import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import { Flex } from '@real-system/flex';
import { Link } from '@real-system/link';
import { Separator } from '@real-system/separator';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
    },
  },
} as Meta;

export const Default = (args) => (
  <Box display="block" width="100%" height="100vh">
    <Separator {...args} />
  </Box>
);

export const Showcase = () => (
  <Flex width="100%" vertical>
    <Flex vertical w="100%" borderColor="weak" gap={4} mb={4}>
      <Text.Heading as="h2">Horizontal Separator for Content</Text.Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Separator orientation="horizontal" />
      <Text.Heading as="h2">It's Very Easy to Use</Text.Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Flex>
    <Flex height="1.4rem" yAlignContent="center" gap={4}>
      <Link href="https://system.themikewolf.com">vertical</Link>
      <Separator orientation="vertical" />
      <Link href="https://system.themikewolf.com">separators</Link>
      <Separator orientation="vertical" />
      <Link href="https://system.themikewolf.com">for</Link>
      <Separator orientation="vertical" />
      <Link href="https://system.themikewolf.com">links</Link>
    </Flex>
  </Flex>
);
