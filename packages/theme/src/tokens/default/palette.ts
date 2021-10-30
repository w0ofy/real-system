import { PaletteColors } from '../types';

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

export type DefaultPalette = { [key in PaletteColors]: DefaultPaletteValues };

const palette: DefaultPalette = {
  brand: '#635bff',
  primary: '#0a2540',
  secondary: '#121c2d',
  success: '#198038',
  warning: '#f1c21b',
  danger: '#da1e28',
  info: '#0043ce',
  strong: '#161616',
  medium: '#333333',
  weak: '#ffffff',
  neutral: '#333333',
};

export default palette;
