import { ButtonPrimitiveElementProps, ButtonPrimitiveProps } from '../types';

import { BUTTON_PRIMITIVE_STYLE_PROPS } from './constants';

const BUTTON_PRIMITIVE_PROPS_TO_BLOCK = [
  ...BUTTON_PRIMITIVE_STYLE_PROPS,
  'className',
  'style',
];

type SafeProps = ButtonPrimitiveElementProps;

/**
 * @description Utility function for filtering out style props and spreading the rest
 */
const safelySpreadButtonPrimitiveProps = (
  props: ButtonPrimitiveProps
): SafeProps =>
  Object.keys(props).reduce((newProps: SafeProps, key) => {
    if (!BUTTON_PRIMITIVE_PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

export { BUTTON_PRIMITIVE_PROPS_TO_BLOCK, safelySpreadButtonPrimitiveProps };
