import * as React from 'react';

import { Box, BoxProps } from '@real-system/box';

export type VisuallyHiddenProps = Pick<BoxProps, 'as'> & {
  children: NonNullable<React.ReactNode>;
};

const VisuallyHidden = React.forwardRef<HTMLElement, VisuallyHiddenProps>(
  ({ as = 'span', children, ...restProps }, ref) => {
    return (
      <Box
        {...restProps}
        ref={ref}
        as={as}
        border="none"
        width="1px"
        height="1px"
        p={0}
        clip="rect(0 0 0 0)"
        margin="space-negative-10"
        overflow="hidden"
        position="absolute"
        textTransform="none"
        whiteSpace="nowrap">
        {children}
      </Box>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
