import { PSEUDO_PROPS } from './pseudoProps';
import { STYLE_PROPS } from './styleProps';
import { StylishPropNames } from './types';

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
);

const isNotStyleProp = (prop: any) => !STYLISH_PROPS_MAP[prop];
const isStyleProp = (prop: any) => STYLISH_PROPS_MAP[prop];
const spreadStyleProps = makePropSpreader(isStyleProp);
const preventSpreadingStyleProps = makePropSpreader(isNotStyleProp);
export {
  isNotStyleProp,
  isStyleProp,
  preventSpreadingStyleProps,
  spreadStyleProps,
  STYLISH_PROPS,
  STYLISH_PROPS_MAP,
};
