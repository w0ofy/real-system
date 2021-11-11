import { BoxAs, BoxStyleProps } from '@real-system/box';
import { merge } from '@real-system/utils';

import { ButtonSizes, ButtonStates, InternalButtonProps } from './types';

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
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
};

const sizeStyles: { [key in ButtonSizes]: BoxStyleProps } = {
  default: {
    px: 9,
    py: 5,
    fontSize: 2,
  },
  small: {
    px: 7,
    py: 4,
    fontSize: 1,
  },
};

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

export type BoxAsButtonProps = Omit<InternalButtonProps, 'buttonState'>;
const BoxAsButton = BoxAs<BoxAsButtonProps>('button');

export { baseStyles, BoxAsButton, resetStyles, sizeStyles };
