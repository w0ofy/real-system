import React from 'react';

import styled, {
  composeStyleProps,
  DefaultTheme,
  StyledComponent,
} from '@realsystem/styling';

import { getPseudoStyles } from './styleFunctions';
import type { BoxProps } from './types';

/**
 * Use `Box` to create other components
 */
const Box = styled.div<BoxProps>(
  { boxSizing: 'border-box' },
  composeStyleProps(),
  getPseudoStyles
);

type Element = keyof JSX.IntrinsicElements | React.ComponentType<any>;

// eslint-disable-next-line @typescript-eslint/ban-types
const BoxAs = <T>(
  element: Element
): StyledComponent<Element, DefaultTheme, BoxProps & T> =>
  styled(element)<BoxProps & T>(
    { boxSizing: 'border-box' },
    composeStyleProps(),
    getPseudoStyles
  );

export { Box, BoxAs };
