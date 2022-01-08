import React, { forwardRef } from 'react';

import styled from '@real-system/styling-library';

import { composeTextStyleProps } from './styleProps/props';
import { getPseudoStyles } from './styleProps/pseudoPropStyles';
import type { TextProps } from './types';

const StyledText = styled.div(composeTextStyleProps(), getPseudoStyles);

const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    children,
    color = 'color-text',
    fontSize = 1,
    fontWeight = 0,
    lineHeight = 4,
    m = 0,
    ...restProps
  },
  ref
) {
  return (
    <StyledText
      ref={ref}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      m={m}
      {...restProps}>
      {children}
    </StyledText>
  );
});

export { Text };
