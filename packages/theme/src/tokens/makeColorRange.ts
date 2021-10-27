import { Property } from 'csstype';

import { polished } from '@realsystem/styling';

import palette from './default/palette';
import { ColorPrefixes, ColorSuffixes, PaletteColors } from './types';

const { tint, shade, invert, complement } = polished;

type FnReturnValue<T extends ColorPrefixes, O extends PaletteColors> = Record<
  `${T}-${O}-${ColorSuffixes}` | `${T}-${O}`,
  Property.Color
>;

const makeColorRange =
  <T extends ColorPrefixes>(colorPrefix: T) =>
  <O extends PaletteColors>(paletteColor: O): FnReturnValue<T, O> => {
    const color = palette[paletteColor];
    const paletteColorName = paletteColor as O;
    const prefix = colorPrefix as T;
    return {
      [`${prefix}-${paletteColorName}`]: color,
      [`${prefix}-${paletteColorName}-highlight`]: invert(color),
      [`${prefix}-${paletteColorName}-complement`]: complement(color),
      [`${prefix}-${paletteColorName}-muted`]: tint(0.3, color),
      [`${prefix}-${paletteColorName}-weak`]: tint(0.3, color),
      [`${prefix}-${paletteColorName}-weaker`]: tint(0.6, color),
      [`${prefix}-${paletteColorName}-weakest`]: tint(0.9, color),
      [`${prefix}-${paletteColorName}-strong`]: shade(0.3, color),
      [`${prefix}-${paletteColorName}-stronger`]: shade(0.6, color),
      [`${prefix}-${paletteColorName}-strongest`]: shade(0.9, color),
    } as FnReturnValue<T, O>;
  };

export { makeColorRange };
