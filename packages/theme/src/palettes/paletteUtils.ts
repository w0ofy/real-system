import { Property } from 'csstype';
import get from 'lodash.get';

import { getColorContrast } from '@real-system/styling';

import { Palette, PaletteKeys } from './types';

const getPaletteColor = (palette: Palette, key: PaletteKeys): string => {
  const color =
    get(palette, key, false) ||
    get(palette, `status.${key}`, false) ||
    get(palette, `accent.${key}`, '');
  return color;
};

const getPaletteContrast = (
  palette: Palette,
  hexcolor: Property.Color
): Property.Color => {
  // Check contrast
  const paletteKey = getColorContrast(hexcolor) === 'black' ? 'strong' : 'weak';

  return get(palette, paletteKey);
};

export { getPaletteColor, getPaletteContrast };
