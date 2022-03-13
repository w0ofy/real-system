import { Palette } from './types';

export type DefaultPaletteColors =
  | '#ffffff'
  | '#101840'
  | '#596375'
  | '#3366FF'
  | '#da1e28'
  | '#ffb020'
  | '#ffca58'
  | '#248641'
  | '#319795'
  | '#00b5d8'
  | '#7f58de'
  | '#d53f8c';

export type StripePaletteColors =
  | '#ffffff'
  | '#32325d'
  | '#525e7e'
  | '#1f7bb7'
  | '#c23d4a'
  | '#f3be58'
  | '#f3be58'
  | '#0d7361'
  | '#319795'
  | '#68d5f8'
  | '#7456b7'
  | '#d53f8c';

export type PaletteConfig = {
  realSystem: Palette<DefaultPaletteColors>;
  stripe: Palette<StripePaletteColors>;
};

const palettes: PaletteConfig = {
  realSystem: {
    white: '#ffffff',
    black: '#101840',
    gray: '#596375',
    blue: '#3366FF',
    red: '#da1e28',
    orange: '#ffb020',
    yellow: '#ffca58',
    green: '#248641',
    teal: '#319795',
    cyan: '#00b5d8',
    purple: '#7f58de',
    pink: '#d53f8c',
  },
  stripe: {
    white: '#ffffff',
    black: '#32325d',
    gray: '#525e7e',
    blue: '#1f7bb7',
    red: '#c23d4a',
    orange: '#f3be58',
    yellow: '#f3be58',
    green: '#0d7361',
    teal: '#319795',
    cyan: '#68d5f8',
    purple: '#7456b7',
    pink: '#d53f8c',
  },
};

export { palettes };
