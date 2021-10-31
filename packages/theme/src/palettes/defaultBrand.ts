import { Palette } from './types';

export type DefaultPaletteValues =
  | '#635bff'
  | '#4b40d2'
  | '#333333'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#161616'
  | '#ffffff'
  | '#121c2d';

export type DefaultPalette = Palette<DefaultPaletteValues>;

const defaultPalette: DefaultPalette = {
  brand: '#635bff',
  primary: '#4b40d2',
  secondary: '#121c2d',
  success: '#198038',
  warning: '#f1c21b',
  danger: '#da1e28',
  info: '#0043ce',
  neutral: '#333333',
  strong: '#161616',
  weak: '#ffffff',
};

export { defaultPalette };
