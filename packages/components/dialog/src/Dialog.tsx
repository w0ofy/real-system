import React, { forwardRef } from 'react';

import { useTransition } from '@real-system/animation';
import { BoxStyleProps } from '@real-system/box';
import { DialogOverlayPrimitiveProps } from '@real-system/dialog-primitive';
import { makeTestId } from '@real-system/utils';

import { DialogContent, DialogOverlay } from './components';
import { DialogContext, DialogContextProvider } from './DialogContext';

const useTransitionProps = {
  from: { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  leave: { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
  config: { duration: 250, mass: 0.5, tension: 370, friction: 26 },
};

type DialogProps = DialogContext &
  BoxStyleProps &
  Pick<DialogOverlayPrimitiveProps, 'allowPinchZoom' | 'initialFocusRef'> & {
    /**
     * Label for the modal; This should be the `id` of the Dialog's header text
     */
    ariaLabelledby: string;
    /**
     * Children nodes rendered inside the modal
     */
    children: NonNullable<React.ReactNode>;
    testId?: string;
    overlayProps?: BoxStyleProps;
  };

const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  {
    ariaLabelledby,
    allowPinchZoom = true,
    children,
    hide,
    initialFocusRef,
    visible,
    overlayProps,
    ...restProps
  }: DialogProps,
  ref
) {
  const transition = useTransition(visible, useTransitionProps);

  return (
    <DialogContextProvider hide={hide} visible={visible}>
      {transition(
        (styles, isVisible) =>
          isVisible && (
            <DialogOverlay
              style={{ opacity: styles.opacity }}
              onDismiss={hide}
              allowPinchZoom={allowPinchZoom}
              initialFocusRef={initialFocusRef}
              {...overlayProps}>
              <DialogContent
                style={styles}
                aria-labelledby={ariaLabelledby}
                ref={ref}
                data-testid={makeTestId<'dialog'>('dialog')}
                {...restProps}>
                {children}
              </DialogContent>
            </DialogOverlay>
          )
      )}
    </DialogContextProvider>
  );
});

export type { DialogProps };
export { Dialog };
