import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>;
    borders: Record<string, any>;
    borderWidths: Record<string, any>;
    radii: Record<string, any>;
    fonts: Record<string, any>;
    fontSizes: Record<string, any>;
    fontWeights: Record<string, any>;
    letterSpacings: Record<string, any>;
    lineHeights: Record<string, any>;
    space: Record<string, any>;
    shadows: Record<string, any>;
    zIndices: Record<string, any>;
    sizes: Record<string, any>;
  }
}
