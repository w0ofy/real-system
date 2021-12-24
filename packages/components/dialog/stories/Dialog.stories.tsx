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
import { Typography } from '@real-system/typography';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as Meta;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef(null);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button onPress={openDialog}>Open Dialog</Button>
      <Dialog
        initialFocusRef={closeRef}
        ariaLabelledby="dialog"
        visible={isOpen}
        hide={closeDialog}>
        <DialogHeader>
          <DialogHeading id="dialog">Dialog</DialogHeading>
        </DialogHeader>
        <DialogBody>
          <Typography>
            Minim aliquip aliquip elit aute. Nostrud minim qui duis cupidatat
            Lorem. Aliqua elit ad aute nulla commodo aliqua aliquip aliquip
            laboris ex sint aute non velit. Ad occaecat et minim dolor in
            consectetur deserunt tempor nostrud.
          </Typography>
        </DialogBody>
        <DialogFooter>
          <DialogFooterActions>
            <DialogAction ref={closeRef} onPress={closeDialog}>
              Close
            </DialogAction>
          </DialogFooterActions>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
