import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { makeTestId } from '@real-system/utils-library';

type DialogBodyProps = {
  children: NonNullable<React.ReactNode>;
} & RealElementPrimitiveProps<'div'>;

const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  function DialogBody({ children, ...restProps }, ref) {
    return (
      <real.div
        paddingY={10}
        paddingX={8}
        data-testid={makeTestId('modal-body')}
        {...restProps}
        ref={ref}>
        {children}
      </real.div>
    );
  }
);

export type { DialogBodyProps };
export { DialogBody };
