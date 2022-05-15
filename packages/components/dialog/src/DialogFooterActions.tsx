import React, { forwardRef, useCallback } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { makeTestId } from '@real-system/utils-library';

type Justify = 'start' | 'end';
type DialogFooterActionsProps = {
  children: NonNullable<React.ReactNode>;
  justify?: Justify;
} & RealElementPrimitiveProps<'div'>;

const DialogFooterActions = forwardRef<
  HTMLDivElement,
  DialogFooterActionsProps
>(function DialogFooterActions({ children, justify, ...restProps }, ref) {
  const count = React.Children.count(children);
  const isNotLast = useCallback((idx: number) => count !== idx + 1, [count]);

  return (
    <real.div
      display="flex"
      justifyContent={justify === 'start' ? 'flex-start' : 'flex-end'}
      flexShrink={justify === 'start' ? undefined : 0}
      flexWrap="wrap"
      flexGrow={1}
      alignItems="center"
      ref={ref}
      data-testid={makeTestId('modal-footer-actions')}
      {...restProps}>
      {React.Children.map(children, (child, idx) => (
        <real.div marginRight={isNotLast(idx) ? 7 : undefined}>
          {child}
        </real.div>
      ))}
    </real.div>
  );
});

export type { DialogFooterActionsProps };
export { DialogFooterActions };
