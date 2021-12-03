import { Property } from 'csstype';

import { getColorContrast } from '@real-system/styling';
import { _get } from '@real-system/utils';

import { Palette, PaletteKeys } from '../palettes/types';

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
  const paletteKey = getColorContrast(hexColor) === 'black' ? 'dark' : 'light';

  return _get(palette, paletteKey);
};

export { getPaletteColor, getPaletteContrast };
