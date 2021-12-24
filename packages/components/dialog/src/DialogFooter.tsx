import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box';
import { makeTestId } from '@real-system/utils';

type DialogFooterProps = BoxProps;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  function DialogFooter({ children, ...props }, ref) {
    return (
      <Box
        as="footer"
        display="flex"
        alignItems="center"
        flexShrink={0}
        py={7}
        px={7}
        borderTopStyle="solid"
        borderTopWidth="1px"
        borderTopColor="color-border-neutral-weak-8"
        ref={ref}
        data-testid={makeTestId('dialog-footer')}
        {...props}>
        {children}
      </Box>
    );
  }
);

export type { DialogFooterProps };
export { DialogFooter };
