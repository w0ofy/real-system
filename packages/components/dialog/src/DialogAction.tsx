import React, { forwardRef, useCallback, useRef } from 'react';

import { Button, ButtonProps } from '@real-system/button';
import { makeTestId, useMergedRef } from '@real-system/utils-library';

import { useDialogContext } from './DialogContext';

type DialogActionProps = ButtonProps;

const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ onClick = undefined, ...restProps }, ref) {
    const { dismiss } = useDialogContext();

    const innerRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergedRef<HTMLButtonElement>(innerRef, ref);

    const handleOnPress = useCallback(
      (e) => {
        if (onClick) {
          return onClick(e);
        }
        !!dismiss && dismiss();
      },
      [onClick, dismiss]
    );

    return (
      <Button
        onClick={handleOnPress}
        data-testid={makeTestId('modal-action')}
        ref={mergedRef}
        {...restProps}
      />
    );
  }
);

export type { DialogActionProps };
export { DialogAction };
