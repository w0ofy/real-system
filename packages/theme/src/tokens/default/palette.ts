import { PaletteColors } from '../types';

export type PaletteValues =
  | '#3843cd'
  | '#0a2540'
  | '#2e2e2e'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#161616'
  | '#ffffff'
  | '#babbc7'
  | '#121c2d';

export type DefaultPalette = { [key in PaletteColors]: PaletteValues };

const palette: DefaultPalette = {
  brand: '#3843cd',
  brandInverse: '#ffffff',
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
