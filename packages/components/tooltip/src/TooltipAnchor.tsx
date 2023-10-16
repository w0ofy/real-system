import React, { cloneElement, forwardRef } from 'react';

import type { TooltipAnchorPrimitiveProps } from '@real-system/tooltip-primitive';
import { TooltipAnchorPrimitive } from '@real-system/tooltip-primitive';
import { isReactText } from '@real-system/utils-library';

import type { TooltipProps } from './types';

type TooltipAnchorProps = TooltipAnchorPrimitiveProps &
  Pick<TooltipProps, 'wrapperElement'>;

const TooltipAnchor = forwardRef<HTMLDivElement, TooltipAnchorProps>(
  function Tooltip(
    { children, wrapperElement: El = 'span', ...restProps },
    ref
  ) {
    // create the trigger if children is number, text or element

    if (isReactText(children)) {
      return (
        <TooltipAnchorPrimitive ref={ref} {...restProps} render={<El />}>
          {children}
        </TooltipAnchorPrimitive>
      );
    }
    return (
      <TooltipAnchorPrimitive
        ref={ref}
        render={(props) => (
          <El>{cloneElement(children as React.ReactElement, props)}</El>
        )}
      />
    );
  }
);
export type { TooltipAnchorProps };
export { TooltipAnchor };
