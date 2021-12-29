import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';
import { BUTTON_PRIMITIVE_PROPS_TO_BLOCK as BUTTON_PRIMITIVE_STYLE_PROPS } from './safelySpreadButtonPrimitiveProps';

const PROPS_TO_ALLOW = [
  ...BUTTON_PRIMITIVE_STYLE_PROPS,
  ...Object.keys(PSEUDO_PROP_STYLES),
];
type Props = { [key: string]: any };

/**
 *
 * @todo attempted to use this when attempting to upgrade esbuild -- either way maybe good to use this in the future.
 */
const safelySpreadStyleProps = (props: Props): Props =>
  Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (PROPS_TO_ALLOW.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

export { safelySpreadStyleProps };
