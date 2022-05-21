import { readableColor, shade, tint, transparentize } from 'polished';

import type { AddSuffix } from '@real-system/utils-library';

import { ColorSchemes, Palette, palettes } from '../palettes';

type ColorTokenSuffixes =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950'
  | AddSuffix<'50', '-readable'>
  | AddSuffix<'100', '-readable'>
  | AddSuffix<'200', '-readable'>
  | AddSuffix<'300', '-readable'>
  | AddSuffix<'400', '-readable'>
  | AddSuffix<'500', '-readable'>
  | AddSuffix<'600', '-readable'>
  | AddSuffix<'700', '-readable'>
  | AddSuffix<'800', '-readable'>
  | AddSuffix<'900', '-readable'>
  | AddSuffix<'950', '-readable'>;

type MakeColorRangeReturnValue<T extends ColorSchemes> = Record<
  `${T}-${ColorTokenSuffixes}`,
  string
>;

/**
 * Mechanism for generating palette color ranges
 */
const makeColorRangeFromPalette = <T extends ColorSchemes>(
  plt: Palette = palettes.realSystem,
  paletteKey: T
): MakeColorRangeReturnValue<T> => {
  const paletteColor = plt[paletteKey];

  const colorRange = {
    [`${paletteKey}-50`]: tint(0.95, paletteColor),
    [`${paletteKey}-100`]: tint(0.85, paletteColor),
    [`${paletteKey}-200`]: tint(0.65, paletteColor),
    [`${paletteKey}-300`]: tint(0.4, paletteColor),
    [`${paletteKey}-400`]: tint(0.25, paletteColor),
    [`${paletteKey}-500`]: paletteColor,
    [`${paletteKey}-600`]: shade(0.25, paletteColor),
    [`${paletteKey}-700`]: shade(0.4, paletteColor),
    [`${paletteKey}-800`]: shade(0.65, paletteColor),
    [`${paletteKey}-900`]: shade(0.8, paletteColor),
    [`${paletteKey}-950`]: shade(0.95, paletteColor),
  };

  const readableTextRange = Object.keys(colorRange).reduce((a, b) => {
    const c = b.split('-')[0];
    const color = colorRange[b];
    return {
      ...a,
      [`${b}-readable`]: readableColor(
        color,
        colorRange[`${c}-950`],
        colorRange[`${c}-50`]
      ),
    };
  }, {});

  return {
    ...colorRange,
    ...readableTextRange,
  } as MakeColorRangeReturnValue<T>;
};

/** @todo make alphas from palette */
const makeAlphasFromPalette = (
  { white, black }: Palette = palettes.realSystem
) => {
  return {
    'white-alpha-50': transparentize(0.96, white),
    'white-alpha-100': transparentize(0.94, white),
    'white-alpha-200': transparentize(0.92, white),
    'white-alpha-300': transparentize(0.84, white),
    'white-alpha-400': transparentize(0.76, white),
    'white-alpha-500': transparentize(0.64, white),
    'white-alpha-600': transparentize(0.52, white),
    'white-alpha-700': transparentize(0.26, white),
    'white-alpha-800': transparentize(0.2, white),
    'white-alpha-900': transparentize(0.08, white),

    'black-alpha-50': transparentize(0.96, black),
    'black-alpha-100': transparentize(0.94, black),
    'black-alpha-200': transparentize(0.92, black),
    'black-alpha-300': transparentize(0.84, black),
    'black-alpha-400': transparentize(0.76, black),
    'black-alpha-500': transparentize(0.64, black),
    'black-alpha-600': transparentize(0.52, black),
    'black-alpha-700': transparentize(0.26, black),
    'black-alpha-800': transparentize(0.2, black),
    'black-alpha-900': transparentize(0.08, black),
  };
};

/**
 * Mechanism for generating color-tokens for ALL possible prefixes from a palette
 */
const makeColorTokensFromPalette = (palette: Palette = palettes.realSystem) => {
  return {
    ...makeColorRangeFromPalette<'gray'>(palette, 'gray'),
    ...makeColorRangeFromPalette<'black'>(palette, 'black'),
    ...makeColorRangeFromPalette<'white'>(palette, 'white'),
    ...makeColorRangeFromPalette<'red'>(palette, 'red'),
    ...makeColorRangeFromPalette<'blue'>(palette, 'blue'),
    ...makeColorRangeFromPalette<'teal'>(palette, 'teal'),
    ...makeColorRangeFromPalette<'cyan'>(palette, 'cyan'),
    ...makeColorRangeFromPalette<'purple'>(palette, 'purple'),
    ...makeColorRangeFromPalette<'yellow'>(palette, 'yellow'),
    ...makeColorRangeFromPalette<'orange'>(palette, 'orange'),
    ...makeColorRangeFromPalette<'pink'>(palette, 'pink'),
    ...makeColorRangeFromPalette<'green'>(palette, 'green'),
    ...makeAlphasFromPalette(palette),
  };
};

export { makeColorTokensFromPalette };
