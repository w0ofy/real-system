import { palettes } from './config';
import { Palette, PaletteValues } from './types';

const overridePalette = <T extends PaletteValues = PaletteValues>(
  paletteName: keyof typeof palettes,
  overrides: Partial<Palette<T>>
) => {
  const palette = palettes[paletteName];
  return {
    ...palette,
    ...overrides,
  };
};

export { overridePalette };
