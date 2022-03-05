import type {
  PaletteSizes,
  SizeTokens,
  TextColorTokens,
} from '@real-system/theme-library';

import type { IconIntent } from './types';

const INTENT_MAP: { [key in IconIntent]: TextColorTokens } = {
  default: 'color-text',
  primary: 'color-text-brand',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
  info: 'color-text-info',
};

const SIZE_MAP: { [key in PaletteSizes]: SizeTokens } = {
  xxs: 'icon-1',
  xs: 'icon-2',
  sm: 'icon-3',
  md: 'icon-4',
  lg: 'icon-5',
  xl: 'icon-6',
  xxl: 'icon-7',
};

export { INTENT_MAP, SIZE_MAP };
