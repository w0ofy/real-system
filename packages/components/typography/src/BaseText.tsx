import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';

import { BaseTextProps } from './types';

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)

const baseStyles = {
  color: 'gray-800',
  fontSize: 1,
  fontWeight: 2,
  lineHeight: 4,
  margin: 0,
  letterSpacing: 'body',
  fontFamily: 'body',
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
