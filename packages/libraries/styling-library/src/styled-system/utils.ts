import { PSEUDO_STYLE_PROPS } from './pseudoProps';
import { STYLE_PROPS } from './styleProps';

type Props = { [key: string]: any };

const STYLE_PROPS_TO_BLOCK = [...STYLE_PROPS, ...PSEUDO_STYLE_PROPS];

const preventSpreadingStyleProps = (props: Props): Props =>
  Object.keys(props).reduce((newProps: Props, key: any): Props => {
    if (!STYLE_PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

const STYLE_PROPS_TO_BLOCK_MAP = STYLE_PROPS_TO_BLOCK.reduce(
  (a, c) => ({
    ...a,
    [c]: true,
  }),
  {}
);

const isNotStyleProp = (prop: any) => !STYLE_PROPS_TO_BLOCK_MAP[prop];
const isStyleProp = (prop: any) => STYLE_PROPS_TO_BLOCK_MAP[prop];

export {
  isNotStyleProp,
  isStyleProp,
  preventSpreadingStyleProps,
  STYLE_PROPS_TO_BLOCK,
  STYLE_PROPS_TO_BLOCK_MAP,
};
