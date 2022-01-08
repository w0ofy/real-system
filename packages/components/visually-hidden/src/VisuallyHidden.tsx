import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box-primitive';

export type VisuallyHiddenProps = Pick<BoxProps, 'as'> & {
  children: NonNullable<React.ReactNode>;
};

const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>(
  function VisuallyHidden({ as = 'span', children, ...restProps }, ref) {
    return (
      <Box
        {...restProps}
        ref={ref}
        as={as}
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
      </Box>
    );
  }
);

export { VisuallyHidden };
