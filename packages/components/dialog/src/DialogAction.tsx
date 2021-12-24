import React, { forwardRef, useCallback, useRef } from 'react';

import { Button, ButtonProps } from '@real-system/button';
import { makeTestId, useMergedRefs } from '@real-system/utils';

import { useDialogContext } from './DialogContext';

type DialogActionProps = ButtonProps;

const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ onPress = undefined, ...props }, ref) {
    const { hide } = useDialogContext();

    const innerRef = useRef<HTMLButtonElement>(null);
    const combinedRef = useMergedRefs<HTMLButtonElement>(innerRef, ref);

    const handleOnPress = useCallback(
      (e) => {
        if (onPress) {
          return onPress(e);
        }
        !!hide && hide();
      },
      [onPress, hide]
    );

    /** @todo handle interaction props in button component */

    return (
      <Button
        onPress={handleOnPress}
        ref={combinedRef}
        data-testid={makeTestId('modal-action')}
        {...props}
      />
    );
  }
);

export type { DialogActionProps };
export { DialogAction };
