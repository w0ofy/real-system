import React, { forwardRef } from 'react';

import type { TooltipAnchorPrimitiveProps } from '@real-system/tooltip-primitive';
import { TooltipAnchorPrimitive } from '@real-system/tooltip-primitive';
import { isReactText } from '@real-system/utils-library';

import type { TooltipProps } from './types';

type TooltipAnchorProps = TooltipAnchorPrimitiveProps &
  Pick<TooltipProps, 'wrapperElement'>;

const TooltipAnchor = forwardRef<HTMLDivElement, TooltipAnchorProps>(
  function Tooltip({ children, wrapperElement: Wrapper = 'span' }, ref) {
    if (isReactText(children)) {
      return (
        <TooltipAnchorPrimitive ref={ref} render={<Wrapper />}>
          {children}
        </TooltipAnchorPrimitive>
      );
    }
    return (
      <TooltipAnchorPrimitive
        ref={ref}
        render={children as React.ReactElement}
      />
    );
  }
);
export type { TooltipAnchorProps };
export { TooltipAnchor };
