import type { StylishProps } from '@real-system/styled-library';
import { merge } from '@real-system/utils-library';

import type { ButtonProps, ButtonSize } from './types';

const sizes: Record<ButtonSize, StylishProps> = {
  xxs: {
    paddingX: 3,
    fontScale: 'button-xxs',
    height: 'control-xxs',
  },
  xs: {
    paddingX: 4,
    fontScale: 'button-xs',
    height: 'control-xs',
  },
  sm: {
    paddingX: 5,
    fontScale: 'button-sm',
    height: 'control-sm',
  },
  md: {
    paddingX: 6,
    fontScale: 'button',
    height: 'control',
  },
  lg: {
    paddingX: 9,
    fontScale: 'button-lg',
    height: 'control-lg',
  },
  xl: {
    paddingX: 11,
    fontScale: 'button-xl',
    height: 'control-xl',
  },
  xxl: {
    paddingX: 13,
    fontScale: 'button-xxl',
    height: 'control-xxl',
  },
};

const mergeStyles = (size: ButtonSize, styles) => merge(sizes[size], styles);

const getCursorStyle = (loading) =>
  loading ? { cursor: 'wait' } : { cursor: 'default' };

type Params = Required<Pick<ButtonProps, 'size' | 'loading' | 'colorScheme'>>;

/**
 * @todo modularize this kind of function in styled-library
 */
const maybeOrange = (colorScheme: Params['colorScheme']) =>
  colorScheme === 'orange' ? '700' : '600';
const ifGray = (
  colorScheme: Params['colorScheme'],
  thenValue: string,
  elseValue: string
) => (colorScheme === 'gray' ? thenValue : elseValue);
/**
 * @todo lighten fill variant if color scheme is gray
 */
const buttonStylesConfig = {
  floating: ({ size, loading, colorScheme }: Params) =>
    mergeStyles(size, {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      color: `${colorScheme}-${maybeOrange(colorScheme)}`,
      backgroundColor: 'transparent',
      _hover: {
        color: `${colorScheme}-700`,
      },
      _active: {
        boxShadow: 'none',
        color: `${colorScheme}-800`,
      },
      _expanded: {
        color: `${colorScheme}-800`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
      },
    }),
  minimal: ({ size, colorScheme, loading }: Params) =>
    mergeStyles(size, {
      color: `${colorScheme}-${maybeOrange(colorScheme)}`,
      backgroundColor: 'transparent',
      _hover: {
        backgroundColor: `${colorScheme}-50`,
      },
      _active: {
        boxShadow: 'none',
        color: `${colorScheme}-900`,
        backgroundColor: `${colorScheme}-100`,
      },
      _expanded: {
        color: `${colorScheme}-900`,
        backgroundColor: `${colorScheme}-100`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
        backgroundColor: `${colorScheme}-50`,
      },
    }),
  fill: ({ size, colorScheme, loading }: Params) =>
    mergeStyles(size, {
      color: `${colorScheme}-${ifGray(colorScheme, '200', '500')}-readable`,
      backgroundColor: `${colorScheme}-${ifGray(colorScheme, '100', '500')}`,
      _hover: {
        backgroundColor: `${colorScheme}-${ifGray(colorScheme, '200', '600')}`,
      },
      _active: {
        boxShadow: 'none',
        backgroundColor: `${colorScheme}-${ifGray(colorScheme, '300', '700')}`,
      },
      _expanded: {
        backgroundColor: `${colorScheme}-${ifGray(colorScheme, '300', '700')}`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
        backgroundColor: `${colorScheme}-50`,
      },
    }),
  outline: ({ size, colorScheme, loading }: Params) =>
    mergeStyles(size, {
      color: `${colorScheme}-${maybeOrange(colorScheme)}`,
      backgroundColor: 'transparent',
      borderColor: `${colorScheme}-300`,
      _hover: {
        backgroundColor: `${colorScheme}-50`,
        borderColor: `${colorScheme}-400`,
      },
      _active: {
        boxShadow: 'none',
        backgroundColor: `${colorScheme}-100`,
        borderColor: `${colorScheme}-500`,
      },
      _expanded: {
        backgroundColor: `${colorScheme}-100`,
        borderColor: `${colorScheme}-500`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
        borderColor: `${colorScheme}-200`,
      },
    }),
};

export { buttonStylesConfig };
