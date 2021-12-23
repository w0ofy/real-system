import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import { Dialog } from '@real-system/dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as Meta;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog visible={isOpen} hide={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
