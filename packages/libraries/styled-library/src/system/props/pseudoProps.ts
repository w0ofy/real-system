import type { PseudoPropNames, PseudoProps } from '../config';
import { pseudoProps } from '../config';

const PSEUDO_PROPS = Object.keys(pseudoProps) as PseudoPropNames[];

const isPseudoProp = (prop: PropertyKey) => !!pseudoProps[prop];
const isNotPseudoProp = (prop: PropertyKey) => !pseudoProps[prop];

export type { PseudoPropNames, PseudoProps };
export { isNotPseudoProp, isPseudoProp, PSEUDO_PROPS };
