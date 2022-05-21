import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import type { ColorSchemes, ThemeSizes } from '@real-system/styled-library';

type BadgeSize = Extract<ThemeSizes, 'sm' | 'md' | 'lg'>;

type BadgeProps = {
  colorScheme?: ColorSchemes;
  /** Sets badge to a standard size. Use `fontSize` prop for more granular control over size of the badge */
  size?: BadgeSize;
} & RealElementPrimitiveProps<'span'>;

export type { BadgeProps, BadgeSize };
