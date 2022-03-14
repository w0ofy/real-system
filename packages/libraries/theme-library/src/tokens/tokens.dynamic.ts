import { Palette } from '../palettes/types';

import { makeColorTokensFromPalette } from './tokens.utils';

const colors = (palette: Palette) => ({
  transparent: 'transparent',
  current: 'currentColor',
  black: '#101840',
  white: '#ffffff',
  ...makeColorTokensFromPalette(palette),
});

type ThemeColors = ReturnType<typeof colors>;

const borders = (colors: ThemeColors) => ({
  'border-0': 0,
  'border-1': '1px solid transparent',
  'border-2': `1px solid ${colors['gray-500']}`,
  'border-3': `2px solid ${colors['gray-500']}`,
  'border-4': `4px solid ${colors['gray-500']}`,
  weak: `1px solid ${colors['gray-100']}`,
  strong: `1px solid ${colors['gray-200']}`,
});

const shadows = (colors: ThemeColors) => {
  return {
    'focus-outline': `0 0 0 3px ${colors['blue-400']}`,
    dialog: `${colors['gray-300']} 0px 0px 1px, ${colors['gray-300']} 0px 16px 24px -4px`,
    menu: `0 4px 16px 0 ${colors['black-alpha-300']}`,
    tooltip: `0 3px 7px ${colors['gray-400']}`,
  };
};

const filters = (colors: ThemeColors) => {
  return {
    popover: `drop-shadow(${colors['gray-100']} 0px 2px 6px)`,
  };
};

export type { ThemeColors };
export { borders, colors, filters, shadows };
