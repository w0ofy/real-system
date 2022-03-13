import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { animated } from '@real-system/animation-library';
import { Button } from '@real-system/button';
import {
  DialogContentPrimitive,
  DialogOverlayPrimitive,
} from '@real-system/dialog-primitive';
import styled from '@real-system/styling-library';
import { getToken, majorScale } from '@real-system/theme-library';
import { Text } from '@real-system/typography';

const DialogOverlay = styled(animated(DialogOverlayPrimitive))`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${getToken('black-alpha-500')};
`;

const DialogContent = styled(animated(DialogContentPrimitive))`
  position: relative;
  box-shadow: ${getToken('dialog', 'shadows')};
  outline: 0;
  width: 100%;
  max-width: ${majorScale(65)};
  min-height: 150px;
  background-color: ${getToken('white')};
  border-radius: ${getToken(2, 'radii')};
  display: flex;
  flex-direction: column;
  z-index: ${getToken(3, 'zIndices')};
  opacity: 1;
`;

export default {
  title: 'Primitives/Dialog Primitive',
  component: DialogOverlayPrimitive,
} as Meta;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="fill">
        Open Dialog Primitive
      </Button>
      <DialogOverlay isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <DialogContent>
          <Text.Heading as="h3" marginBottom={10}>
            Dialog Primitive
          </Text.Heading>
          <Button onClick={() => setIsOpen(false)} width={20}>
            Close
          </Button>
        </DialogContent>
      </DialogOverlay>
    </>
  );
};

export const Default = Template.bind({});
