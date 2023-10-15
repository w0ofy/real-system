import { palettes } from './config';
import type { Palette, PaletteValues } from './types';

type InitialPalette = keyof typeof palettes | Palette;

const overridePalette = <T extends PaletteValues = PaletteValues>(
  initialPalette: InitialPalette,
  overrides: Partial<Palette<T>>
) => {
  if (typeof initialPalette === 'string') {
    return {
      ...palettes[initialPalette],
      ...overrides,
    };
  }
  return {
    ...initialPalette,
    ...overrides,
  };
};

export { overridePalette };
