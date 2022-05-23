/* eslint-disable @typescript-eslint/ban-types */
import * as CSS from 'csstype';

type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>;
type Scale = ObjectOrArray<number | string>;

type ConfigStyle = {
  /** The CSS property to use in the returned style object (overridden by `properties` if present). */
  property?: keyof CSS.Properties | undefined;
  /**
   * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to which this style's value will be
   * assigned (overrides `property` when present).
   */
  properties?: Array<keyof CSS.Properties> | undefined;
  /** A string referencing a key in the `theme` object. */
  scale?: string | undefined;
  /** A fallback scale object for when there isn't one defined in the `theme` object. */
  defaultScale?: Scale | undefined;
  /** A function to transform the raw value based on the scale. */
  transform?: ((value: any, scale?: Scale) => any) | undefined;
};
type ConfigFunction = {
  (value: any, scale: Scale | undefined, props: any): any;
  /** A string referencing a key in the `theme` object. */
  scale?: string;
  /** A fallback scale object for when there isn't one defined in the `theme` object. */
  defaults?: Scale;
};

type Config = ConfigStyle | ConfigFunction | boolean;

type StylePropConfig<T> = Record<keyof T, Config>;

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
