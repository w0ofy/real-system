import { BoxStyleProps } from '@real-system/box';
import { merge } from '@real-system/utils';

import { ButtonSizes, ButtonStates, ButtonVariants } from './types';

const resetStyles: BoxStyleProps = {
  appearance: 'none',
  color: 'color-text',
  background: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 1,
  borderRadius: 2,
  transition:
    'background-color 150ms ease-in-out, box-shadow 150ms ease-in, color 150ms ease-in-out, transform 150ms ease-in-out',
  fontSize: 2,
  fontFamily: 'font-family-text',
  fontWeight: 1,
  textDecoration: 'none',
  position: 'relative',
  margin: 0,
  _hover: {},
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
};

const ifNotLink = (variant: ButtonVariants, value: number) =>
  variant === 'link' ? 0 : value;
const getSizeStyles = (
  variant: ButtonVariants
): { [key in ButtonSizes]: BoxStyleProps } => ({
  default: {
    px: ifNotLink(variant, 8),
    py: ifNotLink(variant, 5),
    fontSize: 2,
  },
  small: {
    px: ifNotLink(variant, 7),
    py: ifNotLink(variant, 4),
    fontSize: 1,
  },
});

const baseStyles: { [key in ButtonStates]: BoxStyleProps } = {
  default: merge(resetStyles, {
    cursor: 'pointer',
  }),
  disabled: merge(resetStyles, {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    transform: 'none',
  }),
  loading: merge(resetStyles, {
    cursor: 'wait',
    pointerEvents: 'none',
    transform: 'none',
  }),
};

export { baseStyles, getSizeStyles, resetStyles };
