import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import { Flex } from '@real-system/flex';
import { Toast, Toaster, useToaster } from '@real-system/toaster';

export default {
  title: 'Components/Toaster',
  component: Toaster,
  subcomponents: { Toast },
} as Meta;

export const Showcase = (_args) => {
  const toaster = useToaster();
  return (
    <Flex vertical>
      <Button
        marginBottom={4}
        colorScheme="blue"
        onClick={() =>
          toaster.notify('12 new messages', {
            description: 'Hi, my name is Bond, James Bond... Hello',
          })
        }>
        Notify toaster
      </Button>
      <Button
        marginBottom={4}
        colorScheme="blue"
        onClick={() =>
          toaster.notify('Successfully installed Real System', {
            dismissAfter: false,
            description:
              'You have now have full access to components that make sense.',
          })
        }>
        Notify toaster with no timer
      </Button>
      <Button
        marginBottom={4}
        colorScheme="blue"
        onClick={() =>
          toaster.notify('Successfully installed Real System', {
            description:
              'You have now have full access to components that make sense.',
            onLeave: () => alert('onLeave callback called.'),
          })
        }>
        Notify toaster with onLeave
      </Button>
      <Button
        colorScheme="orange"
        marginBottom={4}
        onClick={() =>
          toaster.warning('You forgot to enter some details', {
            description:
              'Fill in your first name, last name and date of birth.',
          })
        }>
        Warning toaster
      </Button>
      <Button
        colorScheme="red"
        marginBottom={4}
        onClick={() =>
          toaster.danger('Verification failed', {
            description: 'Contact customer support for assistance.',
            onDismiss: () => {
              // eslint-disable-next-line no-console
              alert('The custom dismiss callback was called');
            },
          })
        }>
        Danger toaster with onDismiss
      </Button>
      <Button
        marginBottom={4}
        colorScheme="green"
        onClick={() =>
          toaster.success('Successfully installed Real System', {
            description:
              'You have now have full access to components that make sense.',
          })
        }>
        Success toaster
      </Button>
      <Toaster state={toaster} />
    </Flex>
  );
};
