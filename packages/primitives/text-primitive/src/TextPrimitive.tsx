import React, { forwardRef } from 'react';

import styled, {
  getPseudoStyleProps,
  getStyleProps,
} from '@real-system/styling-library';

import type { TextPrimitiveProps } from './types';

const StyledText = styled.div<any>(getStyleProps, getPseudoStyleProps);

const baseStyles = {
  color: 'color-text',
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
