import { Property } from 'csstype';

import { polished } from '@real-system/styling-library';

import type { Palette, PaletteKeys } from '../palettes/types';
import type { TokenPrefixes, TokenSuffixes } from '../tokens/types';

import { getPaletteColor } from './getPaletteColor';

const { tint, shade, invert, readableColor } = polished;

type Modifications = {
  prefix?: string;
  suffix?: string;
};

type MakeColorRangeReturnValue<
  T extends TokenPrefixes,
  O extends PaletteKeys
> = Record<`${T}-${O}-${TokenSuffixes}` | `${T}-${O}`, Property.Color>;

const formatConjunction = (str: string | undefined, isPrefix = false) =>
  str ? (isPrefix ? `${str} ` : ` ${str}`) : '';

const defaultMods: Modifications = {
  prefix: '',
  suffix: '',
};

const applyValueModifications =
  (mods = defaultMods) =>
  (val: string) => {
    const { prefix = '', suffix = '' } = mods;
    return `${formatConjunction(prefix, true)}${val}${formatConjunction(
      suffix
    )}`;
  };

/**
 ** Mechanism for generating color-tokens for a given prefix and palette
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
      [`${prefix}-${paletteKey}-weak-95`]: modifyValue(tint(0.95, color)),
      [`${prefix}-${paletteKey}-weak-9`]: modifyValue(tint(0.9, color)),
      [`${prefix}-${paletteKey}-weak-85`]: modifyValue(tint(0.85, color)),
      [`${prefix}-${paletteKey}-weak-8`]: modifyValue(tint(0.8, color)),
      [`${prefix}-${paletteKey}-weak-75`]: modifyValue(tint(0.75, color)),
      [`${prefix}-${paletteKey}-weak-7`]: modifyValue(tint(0.7, color)),
      [`${prefix}-${paletteKey}-weak-65`]: modifyValue(tint(0.65, color)),
      [`${prefix}-${paletteKey}-weak-6`]: modifyValue(tint(0.6, color)),
      [`${prefix}-${paletteKey}-weak-55`]: modifyValue(tint(0.55, color)),
      [`${prefix}-${paletteKey}-weak-5`]: modifyValue(tint(0.5, color)),
      [`${prefix}-${paletteKey}-weak-45`]: modifyValue(tint(0.45, color)),
      [`${prefix}-${paletteKey}-weak-4`]: modifyValue(tint(0.4, color)),
      [`${prefix}-${paletteKey}-weak-35`]: modifyValue(tint(0.35, color)),
      [`${prefix}-${paletteKey}-weak-3`]: modifyValue(tint(0.3, color)),
      [`${prefix}-${paletteKey}-weak-25`]: modifyValue(tint(0.25, color)),
      [`${prefix}-${paletteKey}-weak-2`]: modifyValue(tint(0.2, color)),
      [`${prefix}-${paletteKey}-weak-15`]: modifyValue(tint(0.15, color)),
      [`${prefix}-${paletteKey}-weak-1`]: modifyValue(tint(0.1, color)),
      [`${prefix}-${paletteKey}-weak-05`]: modifyValue(tint(0.05, color)),
      // palette color
      [`${prefix}-${paletteKey}`]: modifyValue(color),
      // palette strengthening
      [`${prefix}-${paletteKey}-strong-05`]: modifyValue(shade(0.05, color)),
      [`${prefix}-${paletteKey}-strong-1`]: modifyValue(shade(0.1, color)),
      [`${prefix}-${paletteKey}-strong-15`]: modifyValue(shade(0.15, color)),
      [`${prefix}-${paletteKey}-strong-2`]: modifyValue(shade(0.2, color)),
      [`${prefix}-${paletteKey}-strong-25`]: modifyValue(shade(0.25, color)),
      [`${prefix}-${paletteKey}-strong-3`]: modifyValue(shade(0.3, color)),
      [`${prefix}-${paletteKey}-strong-35`]: modifyValue(shade(0.35, color)),
      [`${prefix}-${paletteKey}-strong-4`]: modifyValue(shade(0.4, color)),
      [`${prefix}-${paletteKey}-strong-45`]: modifyValue(shade(0.45, color)),
      [`${prefix}-${paletteKey}-strong-5`]: modifyValue(shade(0.5, color)),
      [`${prefix}-${paletteKey}-strong-55`]: modifyValue(shade(0.55, color)),
      [`${prefix}-${paletteKey}-strong-6`]: modifyValue(shade(0.6, color)),
      [`${prefix}-${paletteKey}-strong-65`]: modifyValue(shade(0.65, color)),
      [`${prefix}-${paletteKey}-strong-7`]: modifyValue(shade(0.7, color)),
      [`${prefix}-${paletteKey}-strong-75`]: modifyValue(shade(0.75, color)),
      [`${prefix}-${paletteKey}-strong-8`]: modifyValue(shade(0.8, color)),
      [`${prefix}-${paletteKey}-strong-85`]: modifyValue(shade(0.85, color)),
      [`${prefix}-${paletteKey}-strong-9`]: modifyValue(shade(0.9, color)),
      [`${prefix}-${paletteKey}-strong-95`]: modifyValue(shade(0.95, color)),
      // complementary colors
      [`${prefix}-${paletteKey}-highlight`]: modifyValue(invert(color)),
      [`${prefix}-${paletteKey}-inverse`]: modifyValue(
        readableColor(color, 'black', 'white')
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
