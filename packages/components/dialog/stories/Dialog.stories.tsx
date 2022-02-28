import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';

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

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const confirmRef = useRef(null);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openDialog} variant="primary">
        Open Dialog
      </Button>
      <Dialog
        initialFocusRef={confirmRef}
        ariaLabelledby="dialog"
        isOpen={isOpen}
        dismiss={closeDialog}>
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
              variant="primary"
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
