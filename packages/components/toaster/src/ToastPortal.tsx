import React, { forwardRef } from 'react';

import { Box } from '@real-system/box-primitive';
import { PortalPrimitive } from '@real-system/portal-primitive';
import { preventSpreadingStyleProps } from '@real-system/styling-library';
import type { RealSystemElementProps } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

type ToastPortalProps = {
  children: NonNullable<React.ReactNode>;
} & RealSystemElementProps;

const ToastPortal = forwardRef<HTMLDivElement, ToastPortalProps>(
  function ToastPortal({ children, ...restProps }, ref) {
    return (
      <PortalPrimitive>
        <Box
          data-testid={makeTestId('toast-portal-container')}
          {...preventSpreadingStyleProps(restProps)}
          position="fixed"
          right={6}
          top={12}
          zIndex="toast"
          ref={ref}>
          {children}
        </Box>
      </PortalPrimitive>
    );
  }
);

export type { ToastPortalProps };
export { ToastPortal };
