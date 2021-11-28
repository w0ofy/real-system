import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box';

type TextPrimitiveProps = BoxProps;

const Text = forwardRef<HTMLElement, TextPrimitiveProps>(function Text(
  {
    children,
    color = 'color-text',
    fontSize = 2,
    fontWeight = 0,
    lineHeight = 4,
    m = 0,
    ...restProps
  },
  ref
) {
  return (
    <Box
      ref={ref}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      m={m}
      {...restProps}>
      {children}
    </Box>
  );
});

export { Text };
export type { TextPrimitiveProps };
