import type {
  ColorTokens,
  SizeTokens,
  ThemeSizes,
} from '@real-system/theme-library';

import type { IconIntent } from './types';

const INTENT_MAP: Record<IconIntent, ColorTokens> = {
  neutral: 'gray-500',
  primary: 'blue-500',
  success: 'green-500',
  danger: 'red-500',
  warning: 'orange-600',
  info: 'blue-500',
};

const SIZE_MAP: Record<ThemeSizes, SizeTokens> = {
  xxs: 'icon-1',
  xs: 'icon-2',
  sm: 'icon-3',
  md: 'icon-4',
  lg: 'icon-5',
  xl: 'icon-6',
  xxl: 'icon-7',
};

export { INTENT_MAP, SIZE_MAP };
