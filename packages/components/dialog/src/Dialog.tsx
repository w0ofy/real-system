import React, { forwardRef } from 'react';

import { useTransition } from '@real-system/animation-library';
import type { DialogOverlayPrimitiveProps } from '@real-system/dialog-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import { DialogContent, DialogOverlay } from './components';
import { DialogContextProvider, DialogState } from './DialogContext';

const useTransitionProps = {
  from: { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  leave: { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
  config: { duration: 250, mass: 0.5, tension: 370, friction: 26 },
};

type DialogProps = DialogState &
  StylishProps &
  Pick<DialogOverlayPrimitiveProps, 'allowPinchZoom' | 'initialFocusRef'> & {
    /**
     * (a11y) Label for the dialog i.e. `id` of the Dialog's heading (e.g. `DialogHeading` component)
     */
    ariaLabelledby: string;
    /**
     * Children passed to dialog
     */
    children: NonNullable<React.ReactNode>;
    testId?: string;
    overlayProps?: StylishProps & { className?: string };
  };

const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  {
    ariaLabelledby,
    allowPinchZoom = true,
    children,
    onDismiss,
    initialFocusRef,
    isOpen,
    overlayProps,
    ...restProps
  }: DialogProps,
  ref
) {
  const transition = useTransition(isOpen, useTransitionProps);

  return (
    <DialogContextProvider state={{ onDismiss, isOpen }}>
      {transition(
        (styles, isVisible) =>
          isVisible && (
            <DialogOverlay
              style={{ opacity: styles.opacity }}
              onDismiss={onDismiss}
              allowPinchZoom={allowPinchZoom}
              initialFocusRef={initialFocusRef}
              {...overlayProps}
              ref={ref}>
              <DialogContent
                style={styles}
                aria-labelledby={ariaLabelledby}
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
