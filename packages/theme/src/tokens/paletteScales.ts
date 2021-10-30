import { polished } from '@realsystem/styling';

import { AnyPalette } from '../palettes';

import { makeColorRange } from './makeColorRange';

const color = makeColorRange<'color'>('color');

const colors = (palette: AnyPalette) => ({
  'color-brand': palette.brand,
  ...color<'neutral'>('neutral', palette),
});

const colorBackground = makeColorRange<'color-background'>('color-background');
const backgroundColors = (palette: AnyPalette) => ({
  // in use
  'color-background': palette.weak,
  'color-background-inverse': palette.strong,
  ...colorBackground<'brand'>('brand', palette),
  ...colorBackground<'success'>('success', palette),
  ...colorBackground<'danger'>('danger', palette),
  ...colorBackground<'neutral'>('neutral', palette),

  /** @todo WIP */
  'color-background-overlay': polished.transparentize(0.6, palette.strong),
});

const colorText = makeColorRange<'color-text'>('color-text');
const textColors = (palette: AnyPalette) => ({
  'color-text': palette.medium,
  'color-text-inverse': palette.weak,
  ...colorText<'brand'>('brand', palette),
  ...colorText<'success'>('success', palette),
  ...colorText<'warning'>('warning', palette),
  ...colorText<'danger'>('danger', palette),
  ...colorText<'neutral'>('neutral', palette),
});

const colorBorder = makeColorRange<'color-border'>('color-border');
const borderColors = (palette: AnyPalette) => ({
  'color-border': palette.neutral,
  ...colorBorder<'brand'>('brand', palette),
  ...colorBorder<'neutral'>('neutral', palette),
  ...colorBorder<'success'>('success', palette),
  ...colorBorder<'warning'>('warning', palette),
  ...colorBorder<'danger'>('danger', palette),
  ...colorBorder<'primary'>('primary', palette),
});

const borders = (palette: AnyPalette) => ({
  /** @todo WIP */
  'border-0': 0,
  'border-1': '1px solid transparent',
  'border-2': `1px solid ${palette.neutral}`,
  'border-3': `2px solid ${palette.neutral}`,
  'border-4': `4px solid ${palette.neutral}`,
});

const shadow = makeColorRange<'shadow'>('shadow');

const shadows = (palette: AnyPalette) => {
  const shadowNeutral = shadow<'neutral'>('neutral', palette);
  return {
    /** @todo WIP */
    shadow: `0 0 0 1px ${shadowNeutral['shadow-neutral']}neutral`,
    'shadow-strong': `0 0 0 1px ${shadowNeutral['shadow-neutral-strong']}neutral`,
    'shadow-stronger': `0 0 0 1px ${shadowNeutral['shadow-neutral-stronger']}neutral`,
    'shadow-strongest': `0 0 0 1px ${shadowNeutral['shadow-neutral-strongest']}neutral`,
    'shadow-weak': `0 0 0 1px ${shadowNeutral['shadow-neutral-weak']}neutral`,
    'shadow-weaker': `0 0 0 1px ${shadowNeutral['shadow-neutral-weaker']}neutral`,
    'shadow-weakest': `0 0 0 1px ${shadowNeutral['shadow-neutral-weakest']}neutral`,

    'shadow-outline': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral']}, inset 0 0 0 2px #fff`,
    'shadow-outline-strong': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-strong']}, inset 0 0 0 2px #fff`,
    'shadow-outline-stronger': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-stronger']}, inset 0 0 0 2px #fff`,
    'shadow-outline-strongest': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-strongest']}, inset 0 0 0 2px #fff`,
    'shadow-outline-weak': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-weak']}, inset 0 0 0 2px #fff`,
    'shadow-outline-weaker': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-weaker']}, inset 0 0 0 2px #fff`,
    'shadow-outline-weakest': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-weakest']}, inset 0 0 0 2px #fff`,
  };
};

export { backgroundColors, borderColors, borders, colors, shadows, textColors };
