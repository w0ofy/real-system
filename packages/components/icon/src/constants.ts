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
  xxs: 'icon-xxs',
  xs: 'icon-xs',
  sm: 'icon-sm',
  md: 'icon-md',
  lg: 'icon-lg',
  xl: 'icon-xl',
  xxl: 'icon-xxl',
};

export { INTENT_MAP, SIZE_MAP };
