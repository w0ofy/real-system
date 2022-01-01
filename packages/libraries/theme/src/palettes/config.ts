import { Palette } from './types';

export type DefaultPaletteColors =
  | '#3366FF'
  | '#198038'
  | '#f1c21b'
  | '#da1e28'
  | '#0043ce'
  | '#e7e7e9'
  | '#6FFFB0'
  | '#FD6FFF'
  | '#81FCED'
  | '#FFCA58'
  | '#474d66'
  | '#101840'
  | '#ffffff';

export type PaletteConfig = {
  default: Palette<DefaultPaletteColors>;
} & Record<string, Palette<DefaultPaletteColors>>;

const palettes: PaletteConfig = {
  default: {
    brand: '#3366FF',
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
    neutral: '#474d66',
    dark: '#101840',
    light: '#ffffff',
  },
};

export { palettes };
