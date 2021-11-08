import { Property } from 'csstype';

import { polished } from '@real-system/styling';

import {
  getPaletteColor,
  getPaletteContrast,
  Palette,
  PaletteKeys,
} from '../palettes';

import { ColorPrefixes, ColorSuffixes } from './types';

const { tint, shade, invert } = polished;

type FnReturnValue<T extends ColorPrefixes, O extends PaletteKeys> = Record<
  `${T}-${O}-${ColorSuffixes}` | `${T}-${O}`,
  Property.Color
>;

const makeColorRange =
  <T extends ColorPrefixes>(colorPrefix: T) =>
  <O extends PaletteKeys>(
    paletteKey: O,
    palette: Palette
  ): FnReturnValue<T, O> => {
    const color = getPaletteColor(palette, paletteKey);
    const prefix = colorPrefix as T;

    return {
      [`${prefix}-${paletteKey}`]: color,
      [`${prefix}-${paletteKey}-highlight`]: invert(color),
      [`${prefix}-${paletteKey}-inverse`]: getPaletteContrast(palette, color),
      [`${prefix}-${paletteKey}-muted`]: tint(0.3, color),
      [`${prefix}-${paletteKey}-weak`]: tint(0.3, color),
      [`${prefix}-${paletteKey}-weaker`]: tint(0.6, color),
      [`${prefix}-${paletteKey}-weakest`]: tint(0.9, color),
      [`${prefix}-${paletteKey}-strong`]: shade(0.3, color),
      [`${prefix}-${paletteKey}-stronger`]: shade(0.6, color),
      [`${prefix}-${paletteKey}-strongest`]: shade(0.9, color),
    } as FnReturnValue<T, O>;
  };

export { makeColorRange };
