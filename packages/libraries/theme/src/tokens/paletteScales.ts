import { polished } from '@real-system/styling';

import { Palette } from '../palettes';

import { makeColorRange } from './makeColorRange';

const color = makeColorRange<'color'>('color');

const colors = (palette: Palette) => ({
  'color-light': palette.light,
  'color-dark': palette.dark,
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
});

const colorBackground = makeColorRange<'color-background'>('color-background');
const backgroundColors = (palette: Palette) => ({
  'color-background': palette.light,
  'color-background-dark': palette.dark,
  'color-background-light': palette.light,
  'color-background-overlay': polished.transparentize(0.6, palette.dark),
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
});

const colorText = makeColorRange<'color-text'>('color-text');
const textColors = (palette: Palette) => ({
  'color-text': palette.neutral,
  'color-text-light': palette.light,
  'color-text-dark': palette.dark,
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
});

const colorBorder = makeColorRange<'color-border'>('color-border');
const borderColors = (palette: Palette) => ({
  'color-border': palette.neutral,
  'color-border-dark': palette.dark,
  'color-border-light': palette.light,
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
const shadowBorder = makeColorRange<'shadow-border'>('shadow-border');
const shadows = (palette: Palette) => {
  const shadowBorderBrand = shadowBorder<'brand'>('brand', palette, {
    prefix: '0 0 0 4px',
  });
  return {
    'shadow-focus': shadowBorderBrand['shadow-border-brand-weak'],
    ...shadow<'neutral'>('neutral', palette, {
      prefix: '0 0 0 1px',
    }),
    ...shadowBorderBrand,
  };
};

export { backgroundColors, borderColors, borders, colors, shadows, textColors };
