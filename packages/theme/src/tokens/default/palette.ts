import { PaletteColors } from '../types';

export type DefaultPaletteValues =
  | '#635bff'
  | '#0a2540'
  | '#2e2e2e'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#161616'
  | '#ffffff'
  | '#f9f9f9'
  | '#babbc7'
  | '#121c2d';

export type DefaultPalette = { [key in PaletteColors]: DefaultPaletteValues };

const palette: DefaultPalette = {
  brand: '#635bff',
  inverse: '#f9f9f9',
  primary: '#0a2540',
  secondary: '#2e2e2e',
  success: '#198038',
  warning: '#f1c21b',
  danger: '#da1e28',
  info: '#0043ce',
  strong: '#161616',
  medium: '#121c2d',
  weak: '#ffffff',
  neutral: '#babbc7',
};

export default palette;
