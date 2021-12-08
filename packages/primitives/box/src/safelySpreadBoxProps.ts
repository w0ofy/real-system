import { BOX_STYLE_PROPS } from './styleProps/index';

const PROPS_TO_BLOCK = [...BOX_STYLE_PROPS, 'className', 'style'];

type Props = { [key: string]: any };

const safelySpreadBoxProps = (props: Props): Props =>
  Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

export { PROPS_TO_BLOCK, safelySpreadBoxProps };
