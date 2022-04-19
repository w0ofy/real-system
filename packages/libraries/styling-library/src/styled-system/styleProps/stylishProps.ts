import type { PseudoPropNames, PseudoProps } from './pseudoProps';
import { isNotPseudoProp, isPseudoProp, PSEUDO_PROPS } from './pseudoProps';
import type { StylePropNames, StyleProps } from './styleProps';
import { isNotStyleProp, isStyleProp, STYLE_PROPS } from './styleProps';

type Props = { [key: string]: any };
const makePropSpreader =
  (propChecker: (prop: any) => boolean) =>
  (props: Props): Props =>
    Object.keys(props).reduce((newProps: Props, key: string): Props => {
      if (propChecker(key)) {
        // eslint-disable-next-line no-param-reassign
        newProps[key] = props[key];
      }
      return newProps;
    }, {});

const STYLISH_PROPS = [...STYLE_PROPS, ...PSEUDO_PROPS] as StylishPropNames[];
const STYLISH_PROPS_MAP = STYLISH_PROPS.reduce(
  (a, c) => ({
    ...a,
    [c]: true,
  }),
  {}
) as Record<StylishPropNames, true>;

const isStylishProp = (prop: any) => isStyleProp(prop) && isPseudoProp(prop);
const isNotStylishProp = (prop: any) =>
  isNotStyleProp(prop) && isNotPseudoProp(prop);
const spreadStyleProps = makePropSpreader(isStylishProp);
const preventSpreadingStyleProps = makePropSpreader(isNotStylishProp);

/**
 * Includes style props and pseudo style props
 */
type StylishPropNames = StylePropNames | PseudoPropNames;
type StylishProps = StyleProps & PseudoProps;

export type { StylishPropNames, StylishProps };
export {
  isNotStylishProp,
  isStylishProp,
  preventSpreadingStyleProps,
  spreadStyleProps,
  STYLISH_PROPS,
  STYLISH_PROPS_MAP,
};
