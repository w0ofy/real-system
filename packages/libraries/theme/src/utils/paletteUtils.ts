import { Property } from 'csstype';

import { polished } from '@real-system/styling';
import { _get } from '@real-system/utils';

import { Palette, PaletteKeys } from '../palettes/types';

const { readableColor } = polished;
const getPaletteColor = (palette: Palette, key: PaletteKeys): string =>
  _get.oneOf<Palette, string>(
    palette,
    [key, `status.${key}`, `accent.${key}`],
    ''
  );

const getPaletteContrast = (
  palette: Palette,
  hexColor: Property.Color
): Property.Color => {
  // Check contrast
  const paletteKey = readableColor(hexColor) === '#fff' ? 'light' : 'dark';

  return _get(palette, paletteKey);
};

export { getPaletteColor, getPaletteContrast };
