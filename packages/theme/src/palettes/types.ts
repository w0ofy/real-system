export type PaletteIntents =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type PaletteKeys = PaletteIntents | 'strong' | 'weak';

export type Palette<T> = { [key in PaletteKeys]: T };

export type AnyPalette = Palette<any>;
