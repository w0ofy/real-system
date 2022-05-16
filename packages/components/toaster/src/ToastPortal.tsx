import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import { PortalPrimitive } from '@real-system/portal-primitive';
import type { RealSystemElementProps } from '@real-system/styling-library';
import { preventSpreadingStyleProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

type ToastPortalProps = {
  children: NonNullable<React.ReactNode>;
} & RealSystemElementProps<'div'>;

const ToastPortal = forwardRef<HTMLDivElement, ToastPortalProps>(
  function ToastPortal({ children, ...restProps }, ref) {
    return (
      <PortalPrimitive>
        <real.div
          data-testid={makeTestId('toast-portal-container')}
          {...preventSpreadingStyleProps(restProps)}
          position="fixed"
          right={6}
          top={12}
          zIndex="toast"
          ref={ref}>
          {children}
        </real.div>
      </PortalPrimitive>
    );
  }
);

export type { ToastPortalProps };
export { ToastPortal };
