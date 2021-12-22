import { BUTTON_PRIMITIVE_STYLE_PROPS } from './constants';

const BUTTON_PRIMITIVE_PROPS_TO_BLOCK = [
  ...BUTTON_PRIMITIVE_STYLE_PROPS,
  'className',
  'style',
];

type Props = { [key: string]: any };

const safelySpreadButtonPrimitiveProps = (props: Props): Props =>
  Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!BUTTON_PRIMITIVE_PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

export { BUTTON_PRIMITIVE_PROPS_TO_BLOCK, safelySpreadButtonPrimitiveProps };
