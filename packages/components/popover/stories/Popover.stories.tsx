import React from 'react';
import { Meta } from '@storybook/react';

import { Flex } from '@real-system/flex';
import {
  Popover,
  PopoverButton,
  PopoverContainer,
  PopoverDescription,
  PopoverDismiss,
  PopoverHeading,
} from '@real-system/popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverButton,
    PopoverContainer,
    PopoverDescription,
    PopoverDismiss,
    PopoverHeading,
  },
  argTypes: { hideCloseButton: { type: 'boolean' } },
} as Meta;

const Template = (args) => {
  return (
    <Flex padding={10} xAlignContent="center">
      <PopoverContainer placement="auto">
        <PopoverButton>Open Popover</PopoverButton>
        <Popover hideCloseButton={args.hideCloseButton}>
          <PopoverHeading marginBottom={8}>Meet Popover</PopoverHeading>
          <PopoverDescription marginBottom={8}>
            Hello there. I am a popover! Use me as a non-modal dialog to display
            additional rich content above your UI.
          </PopoverDescription>
          <PopoverDismiss variant="primary">Confirm</PopoverDismiss>
        </Popover>
      </PopoverContainer>
    </Flex>
  );
};

export const Default = Template.bind({});
