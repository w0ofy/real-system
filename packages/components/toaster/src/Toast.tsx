import React, { useEffect, useRef } from 'react';

import { Alert } from '@real-system/alert';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import type { ToastProps } from './types';

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(function Toast(
  props,
  ref
) {
  const {
    message,
    onDismiss,
    status = 'info',
    setFocus,
    description,
    ...restProps
  } = props;
  const dismissRef: React.RefObject<HTMLButtonElement> = useRef(null);

  useEffect(() => {
    if (setFocus && dismissRef.current) {
      dismissRef.current?.focus({ preventScroll: true });
    }
  }, [setFocus]);

  return (
    <Box ref={ref} data-testid={makeTestId('toast')} {...restProps}>
      <Alert
        shrink={0}
        boxShadow={1}
        status={status}
        description={description}
        onDismiss={onDismiss ? onDismiss : undefined}
        dismissRef={dismissRef}
        pointerEvents="all"
        width="40rem">
        {message}
      </Alert>
    </Box>
  );
});

export type { ToastProps };
export { Toast };
