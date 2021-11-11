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

type Options = {
  prefix?: string;
  suffix?: string;
};

const applyValueModifications =
  (valueOptions: Options = { prefix: '', suffix: '' }) =>
  (val: string) => {
    const { prefix, suffix } = valueOptions;
    return `${prefix || ''} ${val} ${suffix || ''}`;
  };

const makeColorRange =
  <T extends ColorPrefixes>(colorPrefix: T) =>
  <O extends PaletteKeys>(
    paletteKey: O,
    palette: Palette,
    valueOptions?: Options
  ): FnReturnValue<T, O> => {
    const color = getPaletteColor(palette, paletteKey);
    const prefix = colorPrefix as T;
    const modifyValue = applyValueModifications(valueOptions);

    const ReturnValue = {
      [`${prefix}-${paletteKey}-weakest`]: modifyValue(tint(0.9, color)),
      [`${prefix}-${paletteKey}-weaker`]: modifyValue(tint(0.6, color)),
      [`${prefix}-${paletteKey}-weak`]: modifyValue(tint(0.3, color)),
      [`${prefix}-${paletteKey}`]: modifyValue(color),
      [`${prefix}-${paletteKey}-strong`]: modifyValue(shade(0.3, color)),
      [`${prefix}-${paletteKey}-stronger`]: modifyValue(shade(0.6, color)),
      [`${prefix}-${paletteKey}-strongest`]: modifyValue(shade(0.9, color)),
      [`${prefix}-${paletteKey}-highlight`]: modifyValue(invert(color)),
      [`${prefix}-${paletteKey}-inverse`]: modifyValue(
        getPaletteContrast(palette, color)
      ),
    } as FnReturnValue<T, O>;

    return ReturnValue;
  };

export { makeColorRange };
