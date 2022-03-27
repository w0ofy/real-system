import type { BoxProps } from '@real-system/box-primitive';
import type { ColorSchemes, ThemeSizes } from '@real-system/theme-library';

type BadgeProps = {
  colorScheme?: ColorSchemes;
  /** Sets badge to a standard size. Use `fontSize` prop for more granular control over size of the badge */
  size?: Extract<ThemeSizes, 'sm' | 'md' | 'lg'>;
} & BoxProps;

export { BadgeProps };
