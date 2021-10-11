import { STYLE_PROPS } from '@realsystem/styling';

const PROPS_TO_BLOCK = [...STYLE_PROPS, 'className', 'style'];

type Props = { [key: string]: any };

const safelySpreadProps = (props: Props): Props => {
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};

export { PROPS_TO_BLOCK, safelySpreadProps };
