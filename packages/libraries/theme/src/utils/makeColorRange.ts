import { Property } from 'csstype';

import { polished } from '@real-system/styling';

import { Palette, PaletteKeys } from '../palettes';
import { TokenPrefixes, TokenSuffixes } from '../tokens';

import { getPaletteColor, getPaletteContrast } from './paletteUtils';

const { tint, shade, invert } = polished;

type Modifications = {
  prefix?: string;
  suffix?: string;
};

type MakeColorRangeReturnValue<
  T extends TokenPrefixes,
  O extends PaletteKeys
> = Record<`${T}-${O}-${TokenSuffixes}` | `${T}-${O}`, Property.Color>;

const defaultMods: Modifications = {
  prefix: '',
  suffix: '',
};

const applyValueModifications =
  (mods = defaultMods) =>
  (val: string) => {
    const { prefix, suffix } = mods;
    return `${prefix || ''} ${val} ${suffix || ''}`;
  };

/**
 ** Mechanism for generating color-tokens for a given prefix from a palette
 */
const makeColorRange =
  <T extends TokenPrefixes>(colorPrefix: T) =>
  <O extends PaletteKeys>(
    paletteKey: O,
    palette: Palette,
    mods = defaultMods
  ): MakeColorRangeReturnValue<T, O> => {
    const color = getPaletteColor(palette, paletteKey);
    const prefix = colorPrefix as T;
    const modifyValue = applyValueModifications(mods);

    const ReturnValue = {
      // palette weakening
      [`${prefix}-${paletteKey}-weak-9`]: modifyValue(tint(0.9, color)),
      [`${prefix}-${paletteKey}-weak-8`]: modifyValue(tint(0.8, color)),
      [`${prefix}-${paletteKey}-weak-7`]: modifyValue(tint(0.7, color)),
      [`${prefix}-${paletteKey}-weak-6`]: modifyValue(tint(0.6, color)),
      [`${prefix}-${paletteKey}-weak-5`]: modifyValue(tint(0.5, color)),
      [`${prefix}-${paletteKey}-weak-4`]: modifyValue(tint(0.4, color)),
      [`${prefix}-${paletteKey}-weak-3`]: modifyValue(tint(0.3, color)),
      [`${prefix}-${paletteKey}-weak-2`]: modifyValue(tint(0.2, color)),
      [`${prefix}-${paletteKey}-weak-1`]: modifyValue(tint(0.1, color)),
      // palette color
      [`${prefix}-${paletteKey}`]: modifyValue(color),
      // palette strengthening
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
    } as MakeColorRangeReturnValue<T, O>;

    return ReturnValue;
  };

/**
 ** Mechanism for generating color-tokens for ALL possible prefixes from a palette
 */

const makeEachColorRange = <T extends TokenPrefixes>(
  colorPrefix: T,
  palette: Palette,
  mods = defaultMods
) => {
  const colorRange = makeColorRange<T>(colorPrefix);
  return {
    ...colorRange<'brand'>('brand', palette, mods),
    ...colorRange<'success'>('success', palette, mods),
    ...colorRange<'info'>('info', palette, mods),
    ...colorRange<'warning'>('warning', palette, mods),
    ...colorRange<'danger'>('danger', palette, mods),
    ...colorRange<'disabled'>('disabled', palette, mods),
    ...colorRange<'primary'>('primary', palette, mods),
    ...colorRange<'secondary'>('secondary', palette, mods),
    ...colorRange<'tertiary'>('tertiary', palette, mods),
    ...colorRange<'quaternary'>('quaternary', palette, mods),
    ...colorRange<'neutral'>('neutral', palette, mods),
  };
};

export { makeColorRange, makeEachColorRange };
