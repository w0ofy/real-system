import { BOX_STYLE_PROPS } from './constants';
import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';

const BOX_PROPS_TO_BLOCK = [
  ...BOX_STYLE_PROPS,
  ...Object.keys(PSEUDO_PROP_STYLES),
  'className',
  'style',
];

type Props = { [key: string]: any };

const safelySpreadBoxProps = (props: Props): Props =>
  Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!BOX_PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

export { BOX_PROPS_TO_BLOCK, safelySpreadBoxProps };
