import type { StylishProps } from '@real-system/styling-library';
import { majorScale } from '@real-system/theme-library';
import { merge } from '@real-system/utils-library';

import type { ButtonProps, ButtonSize } from './types';

const sizes: Record<ButtonSize, StylishProps> = {
  sm: {
    padding: 4,
    fontSize: 1,
    height: majorScale(3),
    lineHeight: majorScale(3),
  },
  md: {
    paddingX: 6,
    paddingY: 4,
    height: majorScale(4),
    lineHeight: majorScale(4),
    fontSize: 1,
  },
  lg: {
    paddingX: 7,
    paddingY: 4,
    fontSize: 2,
    height: majorScale(5),
    lineHeight: majorScale(5),
  },
};

const mergeStyles = (size: ButtonSize, styles) => merge(sizes[size], styles);

const getCursorStyle = (loading) =>
  loading ? { cursor: 'wait' } : { cursor: 'not-allowed' };

type Params = Required<
  Pick<ButtonProps, 'size' | 'loading' | 'colorScheme' | 'active'>
>;

/**
 * @todo modularize this kind of function in theme-library
 */
const maybeWarning = (colorScheme: Params['colorScheme']) =>
  colorScheme === 'orange' ? '700' : '600';

const maybeActive = (active: boolean, value: StylishProps) =>
  active ? value._active : value;

const buttonStylesConfig = {
  floating: ({ size, loading, colorScheme, active }: Params) =>
    mergeStyles(size, {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      color: `${colorScheme}-${maybeWarning(colorScheme)}`,
      backgroundColor: 'transparent',
      ...maybeActive(active, {
        _hover: {
          color: `${colorScheme}-700`,
        },
        _active: {
          color: `${colorScheme}-800`,
        },
      }),
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
      },
    }),
  minimal: ({ size, colorScheme, loading, active }: Params) =>
    mergeStyles(size, {
      color: `${colorScheme}-${maybeWarning(colorScheme)}`,
      backgroundColor: 'transparent',
      ...maybeActive(active, {
        _hover: {
          backgroundColor: `${colorScheme}-50`,
        },
        _active: {
          color: `${colorScheme}-900`,
          backgroundColor: `${colorScheme}-100`,
        },
      }),
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
        backgroundColor: `${colorScheme}-50`,
      },
    }),
  fill: ({ size, colorScheme, loading, active }: Params) =>
    mergeStyles(size, {
      color: `${colorScheme}-500-readable`,
      backgroundColor: `${colorScheme}-500`,
      ...maybeActive(active, {
        _hover: {
          backgroundColor: `${colorScheme}-600`,
        },
        _active: {
          backgroundColor: `${colorScheme}-700`,
        },
      }),
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
        backgroundColor: `${colorScheme}-50`,
      },
    }),
  outline: ({ size, colorScheme, loading, active }: Params) =>
    mergeStyles(size, {
      color: `${colorScheme}-${maybeWarning(colorScheme)}`,
      backgroundColor: 'transparent',
      borderColor: `${colorScheme}-300`,
      ...maybeActive(active, {
        _hover: {
          backgroundColor: `${colorScheme}-50`,
          borderColor: `${colorScheme}-400`,
        },
        _active: {
          backgroundColor: `${colorScheme}-100`,
          borderColor: `${colorScheme}-500`,
        },
      }),
      _disabled: {
        ...getCursorStyle(loading),
        color: `${colorScheme}-300`,
        borderColor: `${colorScheme}-200`,
      },
    }),
};

export { buttonStylesConfig };
