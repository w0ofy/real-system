import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';

type BaseTextProps = Omit<RealElementPrimitiveProps, 'size'>;

const baseStyles = {
  color: 'gray-800',
  fontScale: 'body',
  fontWeight: 'body',
  letterSpacing: 'body',
  fontFamily: 'body',
  margin: 0,
};

const BaseText = forwardRef<HTMLElement, BaseTextProps>(function Text(
  { children, ...restProps },
  ref
) {
  return (
    <real.div {...baseStyles} {...restProps} ref={ref}>
      {children}
    </real.div>
  );
});

export type { BaseTextProps };
export { BaseText };
