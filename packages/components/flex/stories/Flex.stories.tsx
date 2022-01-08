import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Flex, FlexProps } from '@real-system/flex';
import { Typography } from '@real-system/typography';

export default {
  title: 'Components/Flex',
  component: Flex,
} as Meta;

export const Default: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <Flex>
      <Box backgroundColor="color-background-brand-disabled" p={8}>
        <Typography>Left item</Typography>
      </Box>
    </Flex>
    <Flex grow>
      <Box backgroundColor="color-background-info-disabled" p={8} width="100%">
        <Typography>Right item</Typography>
      </Box>
    </Flex>
  </Flex>
);

export const Vertical: Story<FlexProps> = () => (
  <Flex vertical>
    <Flex grow>
      <Box backgroundColor="color-background-brand-disabled" p={8} width="100%">
        <Typography>Left item</Typography>
      </Box>
    </Flex>
    <Flex grow>
      <Box backgroundColor="color-background-info-disabled" p={8} width="100%">
        <Typography>Right item</Typography>
      </Box>
    </Flex>
  </Flex>
);

export const Wrapping: Story<FlexProps> = () => (
  <Flex wrap>
    <Flex basis={900}>
      <Box backgroundColor="color-background-brand-disabled" p={8} width="100%">
        <Typography>Left item</Typography>
      </Box>
    </Flex>
    <Flex>
      <Box backgroundColor="color-background-info-disabled" p={8} width="100%">
        <Typography>Right item</Typography>
      </Box>
    </Flex>
  </Flex>
);

export const VerticalAlignment: Story<FlexProps> = () => (
  <Flex yAlignContent="center">
    <Flex grow>
      <Box backgroundColor="color-background-brand-disabled" p={8} width="100%">
        <Typography>Left item</Typography>
      </Box>
    </Flex>
    <Flex grow>
      <Box
        backgroundColor="color-background-info-disabled"
        p={8}
        width="100%"
        height={120}>
        <Typography>Right item</Typography>
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
        backgroundColor="color-background-brand-disabled"
        p={8}>
        <Typography>Left item</Typography>
      </Box>
    </Flex>
    <Flex width="50%">
      <Box
        width="100%"
        textAlign="center"
        backgroundColor="color-background-info-disabled"
        p={8}>
        <Typography>Right item</Typography>
      </Box>
    </Flex>
  </Flex>
);
