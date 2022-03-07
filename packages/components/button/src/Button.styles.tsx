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

const makeButtonStylesFromVariant = {
  floating: ({
    size,
    intent,
    loading,
  }: Required<Pick<ButtonProps, 'size' | 'intent' | 'loading'>>) =>
    mergeStyles(size, {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      color: `color-text-${intent}`,
      backgroundColor: 'none',
      _hover: {
        color: `color-text-${intent}-strong-4`,
      },
      _active: {
        color: `color-text-${intent}-strong-6`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intent}-weak-6`,
      },
    }),
  minimal: ({ size, intent, loading }) =>
    mergeStyles(size, {
      color: `color-text-${intent}`,
      backgroundColor: 'transparent',
      _hover: {
        color: `color-text-${intent}-strong-1`,
        backgroundColor: `color-background-${intent}-weak-9`,
      },
      _active: {
        color: `color-text-${intent}-strong-5`,
        backgroundColor: `color-background-${intent}-weak-8`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intent}-weak-6`,
        backgroundColor: `color-background-${intent}-weak-9`,
      },
    }),
  primary: ({ size, intent, loading }) =>
    mergeStyles(size, {
      color: `color-text-${intent}-contrast`,
      backgroundColor: `color-background-${intent}`,
      _hover: {
        backgroundColor: `color-background-${intent}-strong-2`,
      },
      _active: {
        backgroundColor: `color-background-${intent}-strong-3`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intent}-weak-6`,
        backgroundColor: `color-background-${intent}-weak-9`,
      },
    }),
  default: ({ size, intent, loading }) =>
    mergeStyles(size, {
      color: `color-text-${intent}`,
      backgroundColor: 'transparent',
      borderColor: `color-border-${intent}-weak-6`,
      _hover: {
        color: `color-text-${intent}-strong-2`,
        backgroundColor: `color-background-${intent}-weak-9`,
        borderColor: `color-border-${intent}-weak-2`,
      },
      _active: {
        color: `color-text-${intent}-strong-3`,
        backgroundColor: `color-background-${intent}-weak-8`,
        borderColor: `color-border-${intent}-strong-1`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intent}-weak-6`,
        borderColor: `color-border-${intent}-weak-9`,
      },
    }),
};

export { makeButtonStylesFromVariant };
