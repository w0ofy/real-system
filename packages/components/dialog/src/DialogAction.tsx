import React, { forwardRef, useCallback, useRef } from 'react';

import { Button, ButtonProps } from '@real-system/button';
import { makeTestId, useMergedRef } from '@real-system/utils-library';

import { useDialogContext } from './DialogContext';

type DialogActionProps = ButtonProps;

const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ onPress = undefined, ...restProps }, ref) {
    const { dismiss } = useDialogContext();

    const innerRef = useRef<HTMLButtonElement>(null);
    const combinedRef = useMergedRef<HTMLButtonElement>(innerRef, ref);

    const handleOnPress = useCallback(
      (e) => {
        if (onPress) {
          return onPress(e);
        }
        !!dismiss && dismiss();
      },
      [onPress, dismiss]
    );

    return (
      <Button
        onPress={handleOnPress}
        data-testid={makeTestId('modal-action')}
        ref={combinedRef}
        {...restProps}
      />
    );
  }
);

export type { DialogActionProps };
export { DialogAction };
