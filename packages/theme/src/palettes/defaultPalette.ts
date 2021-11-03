import { Palette } from './types';

export type DefaultPaletteColors =
  | '#7d4cdb'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#cccccc'
  | '#6FFFB0'
  | '#FD6FFF'
  | '#81FCED'
  | '#FFCA58'
  | '#333333'
  | '#161616'
  | '#ffffff';

export type DefaultPalette = Palette<DefaultPaletteColors>;

const defaultPalette: DefaultPalette = {
  brand: '#7d4cdb',
  status: {
    success: '#198038',
    warning: '#f1c21b',
    danger: '#da1e28',
    info: '#0043ce',
    disabled: '#cccccc',
  },
  accent: {
    primary: '#6FFFB0',
    secondary: '#FD6FFF',
    tertiary: '#81FCED',
    quaternary: '#FFCA58',
  },
  neutral: '#333333',
  strong: '#161616',
  weak: '#ffffff',
};

export { defaultPalette };
