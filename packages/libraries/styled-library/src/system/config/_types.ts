/* eslint-disable @typescript-eslint/ban-types */
import type { Config } from 'styled-system';

type StylePropConfig<T> = Record<keyof T, Config[string]>;

type StylePropScales = {
  borders: string | (number & {});
  borderWidths: string | (number & {});
  colors: string;
  filters: string;
  fonts: string;
  fontSizes: string | (number & {});
  fontWeights: string | (number & {});
  letterSpacings: string | (number & {});
  lineHeights: string | (number & {});
  radii: string | (number & {});
  shadows: string | (number & {});
  sizes: string | (number & {});
  space: string | (number & {});
  zIndices: string | (number & {});
};

type StylePropScaleNames = keyof StylePropScales;

type ResponsiveArray<T> = Array<T | null>;
type ResponsiveObject<T> = Partial<Record<string, T>>;
type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

type Length = string | 0 | (number & {});

type Union<T> = T | (string & {});

type Token<
  CSSType,
  ThemeKey extends keyof StylePropScales | (string & {}) = string
> = ThemeKey extends keyof StylePropScales
  ? ResponsiveValue<Union<CSSType | StylePropScales[ThemeKey]>>
  : ResponsiveValue<CSSType>;

export type {
  Length,
  ResponsiveValue,
  StylePropConfig,
  StylePropScaleNames,
  StylePropScales,
  Token,
};
