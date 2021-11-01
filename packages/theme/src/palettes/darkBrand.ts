import { Palette } from './types';

export type DarkBrandPaletteValues =
  | '#232323'
  | '#113f6c'
  | '#333333'
  | '#167332'
  | '#d8ae18'
  | '#c41b24'
  | '#003cb9'
  | '#161616'
  | '#ffffff'
  | '#121c2d'
  | '#4a4a4a';

export type DarkBrandPalette = Palette<DarkBrandPaletteValues>;

const darkBrandPalette: DarkBrandPalette = {
  brand: '#232323',
  primary: '#113f6c',
  secondary: '#121c2d',
  success: '#167332',
  warning: '#d8ae18',
  danger: '#c41b24',
  info: '#003cb9',
  neutral: '#333333',
  strong: '#161616',
  weak: '#ffffff',
};

export { darkBrandPalette };
