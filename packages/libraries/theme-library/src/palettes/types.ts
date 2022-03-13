type PaletteColors =
  | 'black'
  | 'white'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type PaletteValues = RGB | RGBA | HEX;

type Palette<T extends PaletteValues = PaletteValues> = Record<
  PaletteColors,
  T
>;

export type { Palette, PaletteColors, PaletteValues };
