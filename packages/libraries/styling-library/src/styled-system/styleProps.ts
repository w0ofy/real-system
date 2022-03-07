import { system } from 'styled-system';

import { StyleProps, styleProps, StylePropScaleNames } from './config';
import type { PseudoProps } from './pseudoProps';

const getStyleProps = system(styleProps);

const STYLE_PROPS = Object.keys(styleProps) as (keyof StyleProps)[];

/**
 * Includes style props and pseudo style props
 */
type StylishProps = StyleProps & PseudoProps;

export type { StyleProps, StylePropScaleNames, StylishProps };
export { getStyleProps, STYLE_PROPS };
