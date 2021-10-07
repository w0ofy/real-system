import { composeStyleProps, styled } from '@realsystem/styling';
import { BoxProps } from './types';

/**
 * Use `Box` to create other components
 */
const Box = styled.div<BoxProps>(composeStyleProps());

export { Box, BoxProps };
