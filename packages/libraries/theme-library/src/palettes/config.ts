import { Palette } from './types';

export type DefaultPaletteColors =
  | '#3366FF'
  | '#198038'
  | '#ffb020'
  | '#da1e28'
  | '#0043ce'
  | '#e7e7e9'
  | '#6fffb0'
  | '#fd6fff'
  | '#81fced'
  | '#ffca58'
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
      warning: '#ffb020',
      danger: '#da1e28',
      info: '#0043ce',
      disabled: '#e7e7e9',
    },
    accent: {
      primary: '#6fffb0',
      secondary: '#fd6fff',
      tertiary: '#81fced',
      quaternary: '#ffca58',
    },
    neutral: '#474d66',
    dark: '#101840',
    light: '#ffffff',
  },
};

export { palettes };
