import { polished } from '@real-system/styling-library';

import { Palette } from '../palettes';
import { makeColorRange, makeEachColorRange } from '../utils/makeColorRange';

/**
 ** Scales that require palette
 **/

const colors = (palette: Palette) => ({
  'color-light': palette.light,
  'color-dark': palette.dark,
  ...makeEachColorRange<'color'>('color', palette),
});

const backgroundColors = (palette: Palette) => ({
  'color-background': palette.light,
  'color-background-dark': palette.dark,
  'color-background-light': palette.light,
  'color-background-overlay': polished.transparentize(0.6, palette.dark),
  ...makeEachColorRange<'color-background'>('color-background', palette),
});

const textColors = (palette: Palette) => ({
  'color-text': palette.neutral,
  'color-text-light': palette.light,
  'color-text-dark': palette.dark,
  ...makeEachColorRange<'color-text'>('color-text', palette),
});

const borderColors = (palette: Palette) => ({
  'color-border': palette.neutral,
  'color-border-dark': palette.dark,
  'color-border-light': palette.light,
  ...makeColorRange<'color-border'>('color-border')('brand', palette),
  ...makeEachColorRange<'color-border'>('color-border', palette),
});

const borders = (palette: Palette) => ({
  /** @todo WIP */
  'border-0': 0,
  'border-1': '1px solid transparent',
  'border-2': `1px solid ${palette.neutral}`,
  'border-3': `2px solid ${palette.neutral}`,
  'border-4': `4px solid ${palette.neutral}`,
});

const shadowBorder = makeColorRange<'shadow-border'>('shadow-border');
const dropShadow = makeColorRange<'drop-shadow'>('drop-shadow');
const overlayShadow = makeColorRange<'overlay-shadow'>('overlay-shadow');
const combinedOverlayNeutral = (palette: Palette) => {
  const makePart = (suffix: string) =>
    overlayShadow<'neutral'>('neutral', palette, {
      suffix,
    })['overlay-shadow-neutral-weak-4'];

  const overlayBefore = makePart('0px 0px 1px');
  const overlayAfter = makePart('0px 16px 24px -8px');

  return `${overlayBefore}, ${overlayAfter}`;
};

const shadows = (palette: Palette) => {
  const shadowBorderBrand = shadowBorder<'brand'>('brand', palette, {
    prefix: '0 0 0 3px',
  });
  const dropShadowNeutral = dropShadow<'neutral'>('neutral', palette, {
    prefix: '0 3px 7px',
  });

  return {
    'shadow-focus': shadowBorderBrand['shadow-border-brand-weak-3'],
    'overlay-shadow-1': combinedOverlayNeutral(palette),
    ...shadowBorderBrand,
    ...dropShadowNeutral,
  };
};

export { backgroundColors, borderColors, borders, colors, shadows, textColors };
