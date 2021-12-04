import { AddPrefix } from '@real-system/utils';

/**
 * @description all palette keys, regardless of depth
 */
export type PaletteKeys =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'disabled'
  | 'neutral'
  | 'dark'
  | 'light';

export type PaletteIntents = Extract<
  PaletteKeys,
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
>;
export type PaletteStatuses = Extract<
  PaletteKeys,
  'success' | 'warning' | 'danger' | 'info' | 'disabled'
>;
export type PaletteAccents = Extract<
  PaletteKeys,
  'primary' | 'secondary' | 'tertiary' | 'quaternary'
>;
export type PaletteColors = Extract<
  PaletteKeys,
  'brand' | 'neutral' | 'dark' | 'light'
>;

export type PaletteAccessors =
  | PaletteColors
  | AddPrefix<PaletteAccents, 'accent.'>
  | AddPrefix<PaletteStatuses, 'status.'>;

export type Palette<T = string> = {
  accent: { [key in PaletteAccents]: T };
  status: { [key in PaletteStatuses]: T };
} & { [key in PaletteColors]: T };

export type PaletteSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
