import type { AddPrefix } from '@real-system/utils-library';

/**
 * @description all palette keys, regardless of depth
 */
export type PaletteKeys =
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

export type PaletteIntents = PaletteKeys;

export type PaletteStatuses = Extract<
  PaletteKeys,
  'success' | 'warning' | 'danger' | 'info' | 'disabled'
>;
export type PaletteAccents = Extract<
  PaletteKeys,
  'primary' | 'secondary' | 'tertiary' | 'quaternary'
>;
export type PaletteMains = Extract<
  PaletteKeys,
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'neutral'
  | 'dark'
  | 'light'
>;

export type PaletteAccessors =
  | PaletteMains
  | AddPrefix<PaletteStatuses, 'status.'>;

export type Palette<T = string> = {
  status: { [key in PaletteStatuses]: T };
} & { [key in PaletteMains]: T };

export type PaletteSizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
