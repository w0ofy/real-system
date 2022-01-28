import React, { useEffect, useRef } from 'react';

import { Alert } from '@real-system/alert';
import { Box } from '@real-system/box-primitive';

import type { ToastProps } from './types';

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(function Toast(
  props,
  ref
) {
  const {
    message,
    onDismiss,
    intent = 'info',
    setFocus,
    description,
    ...restProps
  } = props;
  const dismissRef: React.RefObject<HTMLButtonElement> = useRef(null);

  useEffect(() => {
    if (setFocus && dismissRef.current) {
      dismissRef.current.focus({ preventScroll: true });
    }
  }, [setFocus]);

  /** @todo fix padding & alignment?? do we need padding? do we need a flex container? */
  return (
    <Box ref={ref} {...restProps}>
      <Alert
        shrink={0}
        boxShadow={1}
        intent={intent}
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
