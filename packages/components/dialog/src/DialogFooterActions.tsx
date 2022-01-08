import React, { forwardRef, useCallback } from 'react';

import { Box, BoxProps } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

type Justify = 'start' | 'end';
type DialogFooterActionsProps = {
  children: NonNullable<React.ReactNode>;
  justify?: Justify;
} & BoxProps;

const DialogFooterActions = forwardRef<
  HTMLDivElement,
  DialogFooterActionsProps
>(function DialogFooterActions({ children, justify, ...restProps }, ref) {
  const count = React.Children.count(children);
  const isNotLast = useCallback((idx: number) => count !== idx + 1, [count]);
  return (
    <Box
      display="flex"
      justifyContent={justify === 'start' ? 'flex-start' : 'flex-end'}
      flexShrink={justify === 'start' ? null : 0}
      flexWrap="wrap"
      flexGrow={1}
      alignItems="center"
      ref={ref}
      data-testid={makeTestId('modal-footer-actions')}
      {...restProps}>
      {React.Children.map(children, (child, idx) => (
        <Box marginRight={isNotLast(idx) ? 7 : null}>{child}</Box>
      ))}
    </Box>
  );
});

export type { DialogFooterActionsProps };
export { DialogFooterActions };
