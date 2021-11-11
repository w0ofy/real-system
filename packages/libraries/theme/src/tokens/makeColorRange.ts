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
      // step weakening
      [`${prefix}-${paletteKey}-weak-9`]: modifyValue(tint(0.9, color)),
      [`${prefix}-${paletteKey}-weak-8`]: modifyValue(tint(0.8, color)),
      [`${prefix}-${paletteKey}-weak-7`]: modifyValue(tint(0.7, color)),
      [`${prefix}-${paletteKey}-weak-6`]: modifyValue(tint(0.6, color)),
      [`${prefix}-${paletteKey}-weak-5`]: modifyValue(tint(0.5, color)),
      [`${prefix}-${paletteKey}-weak-4`]: modifyValue(tint(0.4, color)),
      [`${prefix}-${paletteKey}-weak-3`]: modifyValue(tint(0.3, color)),
      [`${prefix}-${paletteKey}-weak-2`]: modifyValue(tint(0.2, color)),
      [`${prefix}-${paletteKey}-weak-1`]: modifyValue(tint(0.1, color)),
      // core colors
      [`${prefix}-${paletteKey}-weakest`]: modifyValue(tint(0.9, color)),
      [`${prefix}-${paletteKey}-weaker`]: modifyValue(tint(0.6, color)),
      [`${prefix}-${paletteKey}-weak`]: modifyValue(tint(0.3, color)),
      [`${prefix}-${paletteKey}`]: modifyValue(color),
      [`${prefix}-${paletteKey}-strong`]: modifyValue(shade(0.3, color)),
      [`${prefix}-${paletteKey}-stronger`]: modifyValue(shade(0.6, color)),
      [`${prefix}-${paletteKey}-strongest`]: modifyValue(shade(0.9, color)),
      // step strengthening
      [`${prefix}-${paletteKey}-strong-1`]: modifyValue(shade(0.1, color)),
      [`${prefix}-${paletteKey}-strong-2`]: modifyValue(shade(0.2, color)),
      [`${prefix}-${paletteKey}-strong-3`]: modifyValue(shade(0.3, color)),
      [`${prefix}-${paletteKey}-strong-4`]: modifyValue(shade(0.4, color)),
      [`${prefix}-${paletteKey}-strong-5`]: modifyValue(shade(0.5, color)),
      [`${prefix}-${paletteKey}-strong-6`]: modifyValue(shade(0.6, color)),
      [`${prefix}-${paletteKey}-strong-7`]: modifyValue(shade(0.7, color)),
      [`${prefix}-${paletteKey}-strong-8`]: modifyValue(shade(0.8, color)),
      [`${prefix}-${paletteKey}-strong-9`]: modifyValue(shade(0.9, color)),
      // complementary colors
      [`${prefix}-${paletteKey}-highlight`]: modifyValue(invert(color)),
      [`${prefix}-${paletteKey}-inverse`]: modifyValue(
        getPaletteContrast(palette, color)
      ),
    } as FnReturnValue<T, O>;

    return ReturnValue;
  };

export { makeColorRange };
