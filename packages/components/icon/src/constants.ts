import type { SizeTokens, ThemeSizes } from '@real-system/styled-library';

const ICON_SIZE_MAP = {
  xxs: 'icon-xxs',
  xs: 'icon-xs',
  sm: 'icon-sm',
  md: 'icon-md',
  lg: 'icon-lg',
  xl: 'icon-xl',
  xxl: 'icon-xxl',
} satisfies Record<ThemeSizes, SizeTokens>;

export { ICON_SIZE_MAP };
