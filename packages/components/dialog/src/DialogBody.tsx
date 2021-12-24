import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box';
import { makeTestId } from '@real-system/utils';

type DialogBodyProps = {
  children: NonNullable<React.ReactNode>;
} & BoxProps;

const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  function DialogBody({ children, ...props }, ref) {
    return (
      <Box
        py={7}
        px={7}
        ref={ref}
        data-testid={makeTestId('modal-body')}
        {...props}>
        {children}
      </Box>
    );
  }
);

export type { DialogBodyProps };
export { DialogBody };
