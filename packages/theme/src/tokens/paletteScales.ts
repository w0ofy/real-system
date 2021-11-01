import { polished } from '@real-system/styling';

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
  ...colorBackground<'primary'>('primary', palette),
  ...colorBackground<'success'>('success', palette),
  ...colorBackground<'info'>('info', palette),
  ...colorBackground<'danger'>('danger', palette),
  ...colorBackground<'warning'>('warning', palette),
  ...colorBackground<'neutral'>('neutral', palette),

  /** @todo WIP */
  'color-background-overlay': polished.transparentize(0.6, palette.strong),
});

const colorText = makeColorRange<'color-text'>('color-text');
const textColors = (palette: AnyPalette) => ({
  'color-text': palette.neutral,
  'color-text-inverse': palette.weak,
  ...colorText<'brand'>('brand', palette),
  ...colorText<'primary'>('primary', palette),
  ...colorText<'success'>('success', palette),
  ...colorText<'info'>('info', palette),
  ...colorText<'warning'>('warning', palette),
  ...colorText<'danger'>('danger', palette),
  ...colorText<'neutral'>('neutral', palette),
});

const colorBorder = makeColorRange<'color-border'>('color-border');
const borderColors = (palette: AnyPalette) => ({
  'color-border': palette.neutral,
  ...colorBorder<'brand'>('brand', palette),
  ...colorBorder<'primary'>('primary', palette),
  ...colorBorder<'success'>('success', palette),
  ...colorBorder<'info'>('info', palette),
  ...colorBorder<'warning'>('warning', palette),
  ...colorBorder<'danger'>('danger', palette),
  ...colorBorder<'neutral'>('neutral', palette),
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
  };
};

export { backgroundColors, borderColors, borders, colors, shadows, textColors };
