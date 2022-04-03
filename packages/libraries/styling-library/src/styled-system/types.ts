import { StyleProps } from './config';
import type { PseudoPropNames, PseudoProps } from './pseudoProps';
import type { StylePropNames } from './styleProps';

/**
 * Includes style props and pseudo style props
 */
type StylishPropNames = StylePropNames & PseudoPropNames;
type StylishProps = StyleProps & PseudoProps;

export type { StylishPropNames, StylishProps };
