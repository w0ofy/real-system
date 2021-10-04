import { composeStyleProps, styled } from '@realsystem/styling';
import { BoxProps } from './@types/box';

/**
 * Use `Box` to create other components
 */
export const Box = styled.div<BoxProps>(composeStyleProps());
