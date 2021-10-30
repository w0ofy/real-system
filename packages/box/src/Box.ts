import React from 'react';

import styled, {
  composeStyleProps,
  StyledInterface,
} from '@realsystem/styling';

import { getPseudoStyles } from './styleFunctions';
import type { BoxProps } from './types';

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
const BoxAs = <T extends object>(el: Element) => {
  const StyledComponent: ReturnType<StyledInterface> =
    typeof el !== 'string' ? styled(el) : styled[el];
  return StyledComponent<BoxProps & T>(
    { boxSizing: 'border-box' },
    composeStyleProps(),
    getPseudoStyles
  );
};

export { Box, BoxAs, BoxProps };
