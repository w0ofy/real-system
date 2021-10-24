import styled, {
  composeStyleProps,
  StyledInterface,
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

const BoxAs = (el: keyof JSX.IntrinsicElements) => {
  const StyledComponent: ReturnType<StyledInterface> = styled[el];
  return StyledComponent(
    { boxSizing: 'border-box' },
    composeStyleProps(),
    getPseudoStyles
  );
};

export { Box, BoxAs, BoxProps };
