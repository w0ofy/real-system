import React from 'react';

import styled, {
  composeStyleProps,
  DefaultTheme,
  StyledInterface,
  ThemedStyledFunction,
} from '@realsystem/styling';

import { getPseudoStyles } from './styleFunctions';
import type { BoxProps } from './types';
import { filterStyleProps } from '.';

type Element = keyof JSX.IntrinsicElements | React.ComponentType<any>;

/**
 * Use `Box` to create other components
 */
const Box = styled.div<BoxProps>(
  { boxSizing: 'border-box' },
  composeStyleProps(),
  getPseudoStyles
);

// eslint-disable-next-line @typescript-eslint/ban-types
const BoxAs = <T extends object>(
  el: Element
): ReturnType<ThemedStyledFunction<Element, DefaultTheme, BoxProps & T>> => {
  const StyledComponent: ReturnType<StyledInterface> =
    typeof el !== 'string' ? styled(el) : styled[el];
  return StyledComponent<BoxProps & T>(
    { boxSizing: 'border-box' },
    composeStyleProps(),
    getPseudoStyles
  );
};

export { Box, BoxAs, BoxProps };
