import { BoxStyleProps } from '@real-system/box';
import { majorScale } from '@real-system/theme';
import { merge } from '@real-system/utils';

import { ButtonSizes, ButtonStates, ButtonVariants } from './types';

const resetStyles: BoxStyleProps = {
  appearance: 'none',
  color: 'color-text',
  background: 'none',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  border: 1,
  borderRadius: 2,
  transition:
    'background-color 150ms ease-in-out, box-shadow 150ms ease-in, color 150ms ease-in-out, transform 150ms ease-in-out',
  fontSize: 1,
  fontFamily: 'font-family-text',
  fontWeight: 1,
  textDecoration: 'none',
  position: 'relative',
  margin: 0,
  _hover: {},
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
};

const ifNotFloating = (
  variant: ButtonVariants,
  value: number | string,
  ifElse: any = undefined
) => (variant === 'floating' ? ifElse || 0 : value);
const getSizeStyles = (
  variant: ButtonVariants
): { [key in ButtonSizes]: BoxStyleProps } => ({
  large: {
    px: 7,
    py: 4,
    height: majorScale(5),
    lineHeight: majorScale(5),
    fontSize: 2,
  },
  medium: {
    px: 6,
    py: 3,
    height: majorScale(4),
    lineHeight: majorScale(4),
    fontSize: 1,
  },
  small: {
    px: 5,
    py: 3,
    height: majorScale(3),
    lineHeight: majorScale(3),
    fontSize: 1,
  },
});

const baseStyles: { [key in ButtonStates]: BoxStyleProps } = {
  default: merge(resetStyles, {
    cursor: 'pointer',
  }),
  disabled: merge(resetStyles, {
    cursor: 'not-allowed',
    transform: 'none',
  }),
  loading: merge(resetStyles, {
    cursor: 'wait',
    transform: 'none',
  }),
};

export { baseStyles, getSizeStyles, resetStyles };
