import type { PaletteSizes, ThemeTokens } from '@real-system/theme';

import type { IconIntent } from './types';

const INTENT_MAP: { [key in IconIntent]: ThemeTokens } = {
  default: 'color-text',
  primary: 'color-text-brand',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
  info: 'color-text-info',
};

const SIZE_MAP: { [key in PaletteSizes]: ThemeTokens } = {
  xxs: 'size-icon-1',
  xs: 'size-icon-2',
  sm: 'size-icon-3',
  md: 'size-icon-4',
  lg: 'size-icon-5',
  xl: 'size-icon-6',
  xxl: 'size-icon-7',
};

export { INTENT_MAP, SIZE_MAP };
