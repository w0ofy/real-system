/* eslint-disable @typescript-eslint/ban-types */
import type { Config } from 'styled-system';

type StylePropConfig<T> = Record<keyof T, Config[string]>;

type ScaleValueTypings = {
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

type ResponsiveArray<T> = Array<T | null>;
type ResponsiveObject<T> = Partial<Record<string, T>>;
type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

type Length = string | 0 | (number & {});

type Union<T> = T | (string & {});

type Token<
  CSSType,
  ThemeKey extends keyof ScaleValueTypings | (string & {}) = string
> = ThemeKey extends keyof ScaleValueTypings
  ? ResponsiveValue<Union<CSSType | ScaleValueTypings[ThemeKey]>>
  : ResponsiveValue<CSSType>;

export type {
  Length,
  ResponsiveValue,
  ScaleValueTypings,
  StylePropConfig,
  Token,
};
