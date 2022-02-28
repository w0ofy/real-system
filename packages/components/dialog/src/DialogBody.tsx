import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

type DialogBodyProps = {
  children: NonNullable<React.ReactNode>;
} & BoxProps;

const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  function DialogBody({ children, ...restProps }, ref) {
    return (
      <Box
        paddingY={10}
        paddingX={8}
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
