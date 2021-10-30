export type PaletteKeys =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'strong'
  | 'weak'
  | 'neutral'
  | 'medium';

export type DefaultPaletteValues =
  | '#635bff'
  | '#0a2540'
  | '#333333'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#161616'
  | '#ffffff'
  | '#121c2d';

export type DefaultPalette = { [key in PaletteKeys]: DefaultPaletteValues };

export type DarkBrandPaletteValues =
  | '#232323'
  | '#0a2540'
  | '#333333'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#161616'
  | '#ffffff'
  | '#121c2d'
  | '#4a4a4a';

export type DarkBrandPalette = {
  [key in PaletteKeys]: DarkBrandPaletteValues;
};

export type AnyPalette = DefaultPalette | DarkBrandPalette;
