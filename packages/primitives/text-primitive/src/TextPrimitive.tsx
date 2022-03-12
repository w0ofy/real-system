import React, { forwardRef } from 'react';

import styled, {
  getPseudoProps,
  getStyleProps,
} from '@real-system/styling-library';

import type { TextPrimitiveProps } from './types';

const StyledText = styled.div<any>(getStyleProps, getPseudoProps);

const baseStyles = {
  color: 'gray-800',
  fontSize: 1,
  fontWeight: 0,
  lineHeight: 4,
  margin: 0,
};

const TextPrimitive = forwardRef<HTMLElement, TextPrimitiveProps>(function Text(
  { children, ...restProps },
  ref
) {
  return (
    <StyledText ref={ref} {...baseStyles} {...restProps}>
      {children}
    </StyledText>
  );
});

export { TextPrimitive };
