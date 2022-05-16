import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { makeTestId } from '@real-system/utils-library';

export type VisuallyHiddenProps = RealElementPrimitiveProps & {
  children: NonNullable<React.ReactNode>;
};

const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>(
  function VisuallyHidden({ children, ...restProps }, ref) {
    return (
      <real.span
        data-testid={makeTestId('visually-hidden')}
        {...restProps}
        ref={ref}
        border="0px"
        width="1px"
        height="1px"
        padding={0}
        clip="rect(0 0 0 0)"
        clipPath="inset(50%)"
        margin="0 -1px -1px 0"
        overflow="hidden"
        position="absolute"
        textTransform="none"
        whiteSpace="nowrap">
        {children}
      </real.span>
    );
  }
);

export { VisuallyHidden };
