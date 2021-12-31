import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box';
import { makeTestId } from '@real-system/utils';

type DialogBodyProps = {
  children: NonNullable<React.ReactNode>;
} & BoxProps;

const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  function DialogBody({ children, ...restProps }, ref) {
    return (
      <Box
        py={10}
        px={8}
        data-testid={makeTestId('modal-body')}
        {...restProps}
        ref={ref}>
        {children}
      </Box>
    );
  }
);

export type { DialogBodyProps };
export { DialogBody };
