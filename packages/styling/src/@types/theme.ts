type Fonts = {
  'font-family-text': string;
  'font-family-code': string;
};

export type ThemeShape = {
  colors: Record<string, string>;
  borders: (number | string)[];
  borderWidths: (number | string)[];
  radii: (number | string)[];
  fonts: Fonts;
  fontSizes: (number | string)[];
  fontWeights: (number | string)[];
  lineHeights: (number | string)[];
  space: (number | string)[];
  shadows: (number | string)[];
  zIndices: (number | string)[];
  size: (number | string)[];
};

export type ThemeScale = keyof ThemeShape;
