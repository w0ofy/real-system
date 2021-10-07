import { merge } from '@realsystem/utils';
import { BoxProps } from '@realsystem/box';
import { ButtonStates, ButtonSizes } from './types';

const ResetStyles: BoxProps = {
  appearance: 'none',
  backgroundColor: 'transparent',
  display: 'inline-block',
  border: 'none',
  outline: 'none',
  transition:
    'background-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in',
  fontFamily: 'fontFamilyText',
  fontWeight: 'fontWeightSemibold',
  textDecoration: 'none',
  position: 'relative',
  margin: 'space0',
};

export const BaseStyles: { [key in ButtonStates]: BoxProps } = {
  default: merge(ResetStyles, {
    cursor: 'pointer',
    _active: { boxShadow: 'none' },
  }),
  disabled: merge(ResetStyles, {
    cursor: 'not-allowed',
  }),
  loading: merge(ResetStyles, {
    cursor: 'wait',
  }),
};

export const SizeStyles: { [key in ButtonSizes]: BoxProps } = {
  default: {
    paddingTop: 'space30',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    paddingRight: 'space40',
    borderRadius: 'borderRadius20',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  small: {
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingLeft: 'space30',
    paddingRight: 'space30',
    borderRadius: 'borderRadius10',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  icon: {
    padding: 'space30',
    borderRadius: 'borderRadius20',
  },
  icon_small: {
    padding: 'space20',
    borderRadius: 'borderRadius20',
  },
  reset: {
    paddingTop: 'space0',
    paddingRight: 'space0',
    paddingBottom: 'space0',
    paddingLeft: 'space0',
    borderWidth: 'borderWidth0',
  },
};
