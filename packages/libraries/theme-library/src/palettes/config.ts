import { Palette } from './types';

export type DefaultPaletteColors =
  | '#3366FF'
  | '#248641'
  | '#ffb020'
  | '#da1e28'
  | '#0043ce'
  | '#e7e7e9'
  | '#6fffb0'
  | '#fd6fff'
  | '#81fced'
  | '#ffca58'
  | '#596375'
  | '#101840'
  | '#ffffff';

export type StripePaletteColors =
  | '#555abf'
  | '#0d7361'
  | '#f3be58'
  | '#c23d4a'
  | '#1f7bb7'
  | '#e7e7e9'
  | '#7456b7'
  | '#9251ab'
  | '#68d5f8'
  | '#f3be58'
  | '#525e7e'
  | '#32325d'
  | '#ffffff';

export type PaletteConfig = {
  default: Palette<DefaultPaletteColors>;
  stripe: Palette<StripePaletteColors>;
};

const palettes: PaletteConfig = {
  default: {
    primary: '#3366FF',
    secondary: '#fd6fff',
    tertiary: '#81fced',
    quaternary: '#ffca58',
    neutral: '#596375',
    dark: '#101840',
    light: '#ffffff',
    status: {
      success: '#248641',
      warning: '#ffb020',
      danger: '#da1e28',
      info: '#0043ce',
      disabled: '#e7e7e9',
    },
  },
  stripe: {
    primary: '#555abf',
    secondary: '#7456b7',
    tertiary: '#68d5f8',
    quaternary: '#f3be58',
    neutral: '#525e7e',
    dark: '#32325d',
    light: '#ffffff',
    status: {
      success: '#0d7361',
      warning: '#f3be58',
      danger: '#c23d4a',
      info: '#1f7bb7',
      disabled: '#e7e7e9',
    },
  },
};

export { palettes };
