import { Property } from 'csstype';

import { getColorContrast } from '@real-system/styling';
import { get } from '@real-system/utils';

import { Palette, PaletteKeys } from './types';

const getPaletteColor = (palette: Palette, key: PaletteKeys): string =>
  get.oneOf<Palette, string>(
    palette,
    [key, `status.${key}`, `accent.${key}`],
    ''
  );

const getPaletteContrast = (
  palette: Palette,
  hexcolor: Property.Color
): Property.Color => {
  // Check contrast
  const paletteKey = getColorContrast(hexcolor) === 'black' ? 'dark' : 'light';

  return get(palette, paletteKey);
};

export { getPaletteColor, getPaletteContrast };
