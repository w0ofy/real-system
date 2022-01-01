import { ButtonPrimitiveProps, ButtonPrimitiveStyleProps } from '../types';

import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';
import { BUTTON_PRIMITIVE_PROPS_TO_BLOCK as BUTTON_PRIMITIVE_STYLE_PROPS } from './safelySpreadButtonPrimitiveProps';

const PROPS_TO_ALLOW = [
  ...BUTTON_PRIMITIVE_STYLE_PROPS,
  ...Object.keys(PSEUDO_PROP_STYLES),
];

/**
 * @description Utility for only spreading style props. Used because
 * (1) `useButton` handles spreading web-standard DOM props and
 * (2) all other custom element props (e.g. as, data-testid) are destructured and manually passed to `ButtonPrimitive`
 */
const safelySpreadInternalProps = (
  props: ButtonPrimitiveProps
): ButtonPrimitiveStyleProps => {
  return Object.keys(props).reduce(
    (newProps: ButtonPrimitiveStyleProps, key): ButtonPrimitiveStyleProps => {
      if (PROPS_TO_ALLOW.includes(key)) {
        newProps[key] = props[key];
      }
      return newProps;
    },
    {}
  );
};

export { safelySpreadInternalProps };
