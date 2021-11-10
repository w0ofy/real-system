import { polished } from '@real-system/styling';

import { Palette } from '../palettes';

import { makeColorRange } from './makeColorRange';

const color = makeColorRange<'color'>('color');

const colors = (palette: Palette) => ({
  ...color<'brand'>('brand', palette),
  ...color<'primary'>('primary', palette),
  ...color<'secondary'>('secondary', palette),
  ...color<'tertiary'>('tertiary', palette),
  ...color<'quaternary'>('quaternary', palette),
  ...color<'primary'>('primary', palette),
  ...color<'success'>('success', palette),
  ...color<'info'>('info', palette),
  ...color<'warning'>('warning', palette),
  ...color<'danger'>('danger', palette),
  ...color<'disabled'>('disabled', palette),
  ...color<'neutral'>('neutral', palette),
  ...color<'strong'>('strong', palette),
  ...color<'weak'>('weak', palette),
});

const colorBackground = makeColorRange<'color-background'>('color-background');
const backgroundColors = (palette: Palette) => ({
  'color-background': palette.weak,
  'color-background-inverse': palette.strong,
  'color-background-overlay': polished.transparentize(0.6, palette.strong),
  ...colorBackground<'brand'>('brand', palette),
  ...colorBackground<'primary'>('primary', palette),
  ...colorBackground<'secondary'>('secondary', palette),
  ...colorBackground<'tertiary'>('tertiary', palette),
  ...colorBackground<'quaternary'>('quaternary', palette),
  ...colorBackground<'primary'>('primary', palette),
  ...colorBackground<'success'>('success', palette),
  ...colorBackground<'info'>('info', palette),
  ...colorBackground<'warning'>('warning', palette),
  ...colorBackground<'danger'>('danger', palette),
  ...colorBackground<'disabled'>('disabled', palette),
  ...colorBackground<'neutral'>('neutral', palette),
  ...colorBackground<'strong'>('strong', palette),
  ...colorBackground<'weak'>('weak', palette),
});

const colorText = makeColorRange<'color-text'>('color-text');
const textColors = (palette: Palette) => ({
  'color-text': palette.neutral,
  'color-text-inverse': palette.weak,
  ...colorText<'brand'>('brand', palette),
  ...colorText<'primary'>('primary', palette),
  ...colorText<'secondary'>('secondary', palette),
  ...colorText<'tertiary'>('tertiary', palette),
  ...colorText<'quaternary'>('quaternary', palette),
  ...colorText<'primary'>('primary', palette),
  ...colorText<'success'>('success', palette),
  ...colorText<'info'>('info', palette),
  ...colorText<'warning'>('warning', palette),
  ...colorText<'danger'>('danger', palette),
  ...colorText<'disabled'>('disabled', palette),
  ...colorText<'neutral'>('neutral', palette),
  ...colorText<'strong'>('strong', palette),
  ...colorText<'weak'>('weak', palette),
});

const colorBorder = makeColorRange<'color-border'>('color-border');
const borderColors = (palette: Palette) => ({
  'color-border': palette.neutral,
  ...colorBorder<'brand'>('brand', palette),
  ...colorBorder<'primary'>('primary', palette),
  ...colorBorder<'secondary'>('secondary', palette),
  ...colorBorder<'tertiary'>('tertiary', palette),
  ...colorBorder<'quaternary'>('quaternary', palette),
  ...colorBorder<'primary'>('primary', palette),
  ...colorBorder<'success'>('success', palette),
  ...colorBorder<'info'>('info', palette),
  ...colorBorder<'warning'>('warning', palette),
  ...colorBorder<'danger'>('danger', palette),
  ...colorBorder<'disabled'>('disabled', palette),
  ...colorBorder<'neutral'>('neutral', palette),
  ...colorBorder<'strong'>('strong', palette),
  ...colorBorder<'weak'>('weak', palette),
});

const borders = (palette: Palette) => ({
  /** @todo WIP */
  'border-0': 0,
  'border-1': '1px solid transparent',
  'border-2': `1px solid ${palette.neutral}`,
  'border-3': `2px solid ${palette.neutral}`,
  'border-4': `4px solid ${palette.neutral}`,
});

const shadow = makeColorRange<'shadow'>('shadow');
const shadows = (palette: Palette) => {
  const shadowWeak = shadow<'weak'>('weak', palette);
  return {
    /** @todo WIP */
    shadow: `0 0 0 1px ${shadowWeak['shadow-weak']}`,
    'shadow-strong': `0 0 0 1px ${shadowWeak['shadow-weak-strong']}`,
    'shadow-stronger': `0 0 0 1px ${shadowWeak['shadow-weak-stronger']}`,
    'shadow-strongest': `0 0 0 1px ${shadowWeak['shadow-weak-strongest']}`,
    'shadow-weak': `0 0 0 1px ${shadowWeak['shadow-weak-weak']}`,
    'shadow-weaker': `0 0 0 1px ${shadowWeak['shadow-weak-weaker']}`,
    'shadow-weakest': `0 0 0 1px ${shadowWeak['shadow-weak-weakest']}`,
  };
};

export { backgroundColors, borderColors, borders, colors, shadows, textColors };
