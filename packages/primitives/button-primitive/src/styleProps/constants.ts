/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { composeButtonPrimitiveStyleProps } from './props';
import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';

const BUTTON_PRIMITIVE_STYLE_PROPS = [
  ...composeButtonPrimitiveStyleProps().propNames!,
  ...Object.keys(PSEUDO_PROP_STYLES),
];

const BUTTON_PRIMITIVE_STYLE_PROPS_MAP = BUTTON_PRIMITIVE_STYLE_PROPS.reduce(
  (a, c) => ({
    ...a,
    [c]: true,
  }),
  {}
);

export { BUTTON_PRIMITIVE_STYLE_PROPS, BUTTON_PRIMITIVE_STYLE_PROPS_MAP };
