import React, { forwardRef, useCallback } from 'react';

import type { ButtonProps } from '@real-system/button';
import { Button } from '@real-system/button';
import { makeTestId } from '@real-system/utils-library';

import { useDialogContext } from './DialogContext';

type DialogActionProps = ButtonProps;

const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ onClick = undefined, ...restProps }, ref) {
    const { onDismiss } = useDialogContext();

    const handleOnPress = useCallback(
      (e) => {
        if (onClick) {
          return onClick(e);
        }
        !!onDismiss && onDismiss();
      },
      [onClick, onDismiss]
    );

    return (
      <Button
        onClick={handleOnPress}
        data-testid={makeTestId('modal-action')}
        ref={ref}
        {...restProps}
      />
    );
  }
);

export type { DialogActionProps };
export { DialogAction };
