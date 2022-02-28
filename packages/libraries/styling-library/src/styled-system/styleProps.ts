import { system } from 'styled-system';

import { StyleProps, styleProps, StylePropScales } from './config';
import type { PseudoStyleProps } from './pseudoProps';

const getStyleProps = system(styleProps);

const STYLE_PROPS = Object.keys(styleProps) as (keyof StyleProps)[];

/**
 * Includes style props and pseudo style props
 */
type StylishProps = StyleProps & PseudoStyleProps;

export type { StyleProps, StylePropScales, StylishProps };
export { getStyleProps, STYLE_PROPS };
