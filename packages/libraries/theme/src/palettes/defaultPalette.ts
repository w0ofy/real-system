import { polished } from '@real-system/styling';

import { Palette } from './types';

export type DefaultPaletteColors =
  | '#7d4cdb'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#f4f4f6'
  | '#6FFFB0'
  | '#FD6FFF'
  | '#81FCED'
  | '#FFCA58'
  | '#1d1827'
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
    disabled: '#f4f4f6',
  },
  accent: {
    primary: '#6FFFB0',
    secondary: '#FD6FFF',
    tertiary: '#81FCED',
    quaternary: '#FFCA58',
  },
  neutral: '#1d1827',
  dark: '#120c1d',
  light: '#ffffff',
};

export { defaultPalette };
