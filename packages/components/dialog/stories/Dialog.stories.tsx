import React, { useRef, useState } from 'react';
import type { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import {
  Dialog,
  DialogAction,
  DialogBody,
  DialogFooter,
  DialogFooterActions,
  DialogHeader,
  DialogHeading,
} from '@real-system/dialog';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as Meta;

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);
  const confirmRef = useRef(null);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openDialog} variant="fill" colorScheme="blue">
        Open Dialog
      </Button>
      <Dialog
        initialFocusRef={confirmRef}
        ariaLabelledby="dialog"
        isOpen={isOpen}
        onDismiss={closeDialog}>
        <DialogHeader>
          <DialogHeading id="dialog">Dialog</DialogHeading>
        </DialogHeader>
        <DialogBody>
          <Text>
            Minim aliquip aliquip elit aute. Nostrud minim qui duis cupidatat
            Lorem. Aliqua elit ad aute nulla commodo aliqua aliquip aliquip
            laboris ex sint aute non velit. Ad occaecat et minim dolor in
            consectetur deserunt tempor nostrud. Minim aliquip aliquip elit
            aute. Nostrud minim qui duis cupidatat Lorem. Aliqua elit ad aute
            nulla commodo aliqua aliquip aliquip laboris ex sint aute non velit.
            Ad occaecat et minim dolor in consectetur deserunt tempor nostrud.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogFooterActions>
            <DialogAction onClick={closeDialog}>Close</DialogAction>
            <DialogAction
              variant="fill"
              colorScheme="blue"
              ref={confirmRef}
              onClick={closeDialog}>
              Confirm
            </DialogAction>
          </DialogFooterActions>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
