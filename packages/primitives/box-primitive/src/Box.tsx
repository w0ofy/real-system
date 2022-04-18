import React, { forwardRef } from 'react';

import type { AnyPropUnion } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { StyledBox } from './Box.styles';
import type { BoxProps } from './types';

const Box = forwardRef<HTMLOrSVGElement, AnyPropUnion<BoxProps>>(function Box(
  { children, ...props },
  ref
) {
  return (
    <StyledBox data-testid={makeTestId<'box'>('box')} {...props} ref={ref}>
      {children}
    </StyledBox>
  );
});

export { Box };
