import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { animated } from '@real-system/animation-library';
import { Button } from '@real-system/button';
import {
  DialogContentPrimitive,
  DialogOverlayPrimitive,
} from '@real-system/dialog-primitive';
import styled, { majorScale } from '@real-system/styled-library';
import { Text } from '@real-system/typography';

const DialogOverlay = styled(animated(DialogOverlayPrimitive))({
  position: 'fixed',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black-alpha-500',
});

const DialogContent = styled(animated(DialogContentPrimitive))({
  position: 'relative',
  boxShadow: 'dialog',
  outline: 0,
  width: '100%',
  maxWidth: majorScale(65),
  minHeight: '150px',
  backgroundColor: 'white',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 'dialog',
  opacity: 1,
});

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
