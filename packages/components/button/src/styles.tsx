import {
  ButtonPrimitiveStyleProps,
  buttonPrimitiveStyles,
} from '@real-system/button-primitive';
import { majorScale } from '@real-system/theme-library';
import { merge } from '@real-system/utils-library';

import { ButtonSizes, ButtonStates, ButtonVariants } from './types';

const ifNotFloating = (
  variant: ButtonVariants,
  value: number | string,
  ifElse?: number | string
) => (variant !== 'floating' ? value : ifElse || 0);

const getSizeStyles = (
  variant: ButtonVariants
): { [key in ButtonSizes]: ButtonPrimitiveStyleProps } => ({
  lg: {
    px: ifNotFloating(variant, 7),
    py: ifNotFloating(variant, 4),
    height: ifNotFloating(variant, majorScale(5), 7),
    lineHeight: ifNotFloating(variant, majorScale(5), 7),
    fontSize: 2,
  },
  md: {
    px: ifNotFloating(variant, 6),
    py: ifNotFloating(variant, 3),
    height: ifNotFloating(variant, majorScale(4), 7),
    lineHeight: ifNotFloating(variant, majorScale(4), 7),
    fontSize: 1,
  },
  sm: {
    px: ifNotFloating(variant, 4),
    py: ifNotFloating(variant, 4),
    height: ifNotFloating(variant, majorScale(3), 6),
    lineHeight: ifNotFloating(variant, majorScale(3), 6),
    fontSize: 1,
  },
});

const baseStyles: { [key in ButtonStates]: ButtonPrimitiveStyleProps } = {
  default: merge(buttonPrimitiveStyles, {
    cursor: 'pointer',
  }),
  disabled: buttonPrimitiveStyles,
  loading: merge(buttonPrimitiveStyles, {
    _disabled: { cursor: 'wait' },
  }),
};

export { baseStyles, getSizeStyles };
