import { BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { ButtonIntents, ButtonSizes, ButtonStates } from './types';

const ResetStyles: BoxStyleProps = {
  appearance: 'none',
  color: 'color-text',
  background: 'none',
  display: 'inline-block',
  border: 1,
  borderRadius: 2,
  outline: 'none',
  transition:
    'background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, color 150ms ease-in-out, transform 150ms ease-in-out',
  fontSize: 1,
  fontFamily: 'font-family-text',
  fontWeight: 'font-weight-semibold',
  textDecoration: 'none',
  position: 'relative',
  px: 5,
  py: 4,
  margin: 'space-0',
  outlineOffset: '1px',
  _focus: { outlineStyle: 'solid' },
  _active: { transform: 'translateY(1px)' },
};

export const BaseStyles: { [key in ButtonStates]: BoxStyleProps } = {
  default: merge(ResetStyles, {
    cursor: 'pointer',
  }),
  disabled: merge(ResetStyles, {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  }),
  loading: merge(ResetStyles, {
    cursor: 'wait',
    pointerEvents: 'none',
  }),
};

export const SizeStyles: { [key in ButtonSizes]: BoxStyleProps } = {
  default: {
    py: 5,
    px: 4,
    fontSize: 1,
  },
  small: {
    py: 3,
    px: 2,
    fontSize: 0,
  },
};

export const IntentStyles: { [key in ButtonIntents]: BoxStyleProps } = {
  default: {},
  success: {},
  danger: {},
};
