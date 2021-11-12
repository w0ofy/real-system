import { polished } from '@real-system/styling';

import { Palette } from './types';

export type DefaultPaletteColors =
  | '#7d4cdb'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#e7e7e9'
  | '#6FFFB0'
  | '#FD6FFF'
  | '#81FCED'
  | '#FFCA58'
  | '#332f3c'
  | '#120c1d'
  | '#ffffff';

export type DefaultPalette = Palette<DefaultPaletteColors>;

const defaultPalette: DefaultPalette = {
  brand: '#7d4cdb',
  status: {
    success: '#198038',
    warning: '#f1c21b',
    danger: '#da1e28',
    info: '#0043ce',
    disabled: '#e7e7e9',
  },
  accent: {
    primary: '#6FFFB0',
    secondary: '#FD6FFF',
    tertiary: '#81FCED',
    quaternary: '#FFCA58',
  },
  neutral: '#332f3c',
  dark: '#120c1d',
  light: '#ffffff',
};

export { defaultPalette };
