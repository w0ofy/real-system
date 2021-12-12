import * as Icons from '@heroicons/react/solid';

import type { MarginProps } from '@real-system/styling';
import type { PaletteIntents, ThemeTokens } from '@real-system/theme';
import type { KebabCase, RemoveSuffix } from '@real-system/utils';

type HeroIconKeys = keyof typeof Icons;
type HeroIconValues = typeof Icons['AcademicCapIcon'];
type RawIcons = KebabCase<HeroIconKeys>;
type Icons = RemoveSuffix<RawIcons, '-icon'>;
type IconIntent =
  | Extract<
      PaletteIntents,
      'primary' | 'success' | 'danger' | 'warning' | 'info'
    >
  | 'default';
type IconProps = {
  icon: Icons;
  /**
   * Controls the size of the icon
   */
  size?:
    | Extract<
        ThemeTokens,
        | 'size-icon-10'
        | 'size-icon-20'
        | 'size-icon-30'
        | 'size-icon-40'
        | 'size-icon-50'
        | 'size-icon-60'
        | 'size-icon-70'
        | 'size-icon-80'
        | 'size-icon-90'
        | 'size-icon-100'
        | 'size-icon-110'
      >
    | 'size-icon-button'
    | 'size-icon-button-small';
  /**
   * Controls the color of the icon. If an `intent` is not provided the color defaults to `currentColor`
   */
  intent?: IconIntent;
  /**
   * Controls solid or default (outline) icon style
   */
  solid?: boolean;
  /**
   * Sets the title of the svg
   */
  title?: string;
} & MarginProps;

type InternalIconProps = Omit<IconProps, 'icon' | 'size' | 'intent'> & {
  Icon: HeroIconValues;
  size: any;
  intent: any;
};

export type {
  HeroIconKeys,
  HeroIconValues,
  IconIntent,
  IconProps,
  Icons,
  InternalIconProps,
  RawIcons,
};
