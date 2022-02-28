import { merge } from '@real-system/utils-library';

import type { PaletteIntents } from '../../palettes';
import { majorScale } from '../../sizeUtils';

import type { ThemeConfigFnArgs } from './types';

const baseStyles = {
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
    'background-color 150ms ease-in-out, box-shadow 150ms ease-in, color 150ms ease-in-out',
  fontSize: 1,
  fontFamily: 'font-family-text',
  fontWeight: 1,
  textDecoration: 'none',
  position: 'relative',
  margin: 0,
  cursor: 'pointer',
  _hover: {},
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
};

const sizes = {
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

const intents: Record<ButtonIntents, ButtonIntents | 'brand'> = {
  primary: 'brand',
  success: 'success',
  danger: 'danger',
  neutral: 'neutral',
};

type ButtonSizes = keyof typeof sizes;
type ButtonIntents = Extract<
  PaletteIntents,
  'primary' | 'success' | 'danger' | 'neutral'
>;

type VariantArgs = ThemeConfigFnArgs<{
  size: ButtonSizes;
  intent: ButtonIntents;
  loading: boolean;
}>;

const makeVariantStyles = (size: ButtonSizes, styles) =>
  merge(sizes[size], styles);

const getCursorStyle = (loading) =>
  loading ? { cursor: 'wait' } : { cursor: 'not-allowed' };

const variants = {
  floating: ({ size, intent, loading }: VariantArgs) =>
    makeVariantStyles(size, {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      color: `color-text-${intents[intent]}`,
      backgroundColor: 'none',
      _hover: {
        color: `color-text-${intents[intent]}-strong-4`,
      },
      _active: {
        color: `color-text-${intents[intent]}-strong-6`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intents[intent]}-weak-6`,
      },
    }),
  minimal: ({ size, intent, loading }: VariantArgs) =>
    makeVariantStyles(size, {
      color: `color-text-${intents[intent]}`,
      backgroundColor: 'transparent',
      _hover: {
        color: `color-text-${intents[intent]}-strong-1`,
        backgroundColor: `color-background-${intents[intent]}-weak-9`,
      },
      _active: {
        color: `color-text-${intents[intent]}-strong-5`,
        backgroundColor: `color-background-${intents[intent]}-weak-8`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intents[intent]}-weak-6`,
        backgroundColor: `color-background-${intents[intent]}-weak-9`,
      },
    }),
  primary: ({ size, intent, loading }: VariantArgs) =>
    makeVariantStyles(size, {
      color: `color-text-${intents[intent]}-contrast`,
      backgroundColor: `color-background-${intents[intent]}`,
      _hover: {
        backgroundColor: `color-background-${intents[intent]}-strong-2`,
      },
      _active: {
        backgroundColor: `color-background-${intents[intent]}-strong-3`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intents[intent]}-weak-6`,
        backgroundColor: `color-background-${intents[intent]}-weak-9`,
      },
    }),
  default: ({ size, intent, loading }: VariantArgs) =>
    makeVariantStyles(size, {
      color: `color-text-${intents[intent]}`,
      backgroundColor: 'transparent',
      borderColor: `color-border-${intents[intent]}-weak-6`,
      _hover: {
        color: `color-text-${intents[intent]}-strong-2`,
        backgroundColor: `color-background-${intents[intent]}-weak-9`,
        borderColor: `color-border-${intents[intent]}-weak-3`,
      },
      _active: {
        color: `color-text-${intents[intent]}-strong-3`,
        backgroundColor: `color-background-${intents[intent]}-weak-8`,
        borderColor: `color-border-${intents[intent]}-strong-1`,
      },
      _disabled: {
        ...getCursorStyle(loading),
        color: `color-text-${intents[intent]}-weak-6`,
        backgroundColor: `color-background-${intents[intent]}-weak-9`,
        borderColor: `color-border-${intents[intent]}-weak-9`,
      },
    }),
};

const buttonTheme = {
  baseStyles,
  sizes,
  variants,
  intents,
};

type ButtonTheme = typeof buttonTheme;

export type { ButtonTheme };
export { buttonTheme };
