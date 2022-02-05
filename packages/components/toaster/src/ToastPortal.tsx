import React, { forwardRef } from 'react';

import { Box, safelySpreadBoxProps } from '@real-system/box-primitive';
import { PortalPrimitive } from '@real-system/portal-primitive';
import { makeTestId } from '@real-system/utils-library';

type ToastPortalProps = {
  children: NonNullable<React.ReactNode>;
};

const ToastPortal = forwardRef<HTMLDivElement, ToastPortalProps>(
  function ToastPortal({ children, ...props }, ref) {
    return (
      <PortalPrimitive>
        <Box
          {...safelySpreadBoxProps(props)}
          data-testid={makeTestId('toast-portal-container')}
          position="fixed"
          right={6}
          top={12}
          zIndex={9}
          ref={ref}>
          {children}
        </Box>
      </PortalPrimitive>
    );
  }
);

export type { ToastPortalProps };
export { ToastPortal };
