import * as Icons from '@heroicons/react/outline';

import type { MarginProps } from '@real-system/styling';
import type { PaletteIntents, ThemeTokens } from '@real-system/theme';
import type { KebabCase, RemoveSuffix } from '@real-system/utils';

/** Hero Icon types */
type HeroIconSet = typeof Icons;
type HeroIconNames = keyof HeroIconSet;

/** Raw/unformatted icons */
type RawIcons = KebabCase<HeroIconNames>;

/** real system formatted icons -- removes "-icon" suffix so to make icon names more clean. Refer to  */
type Icons = RemoveSuffix<RawIcons, '-icon'>;

/** typeof an icon component (selected any icon, it doesn't matter. They should all have the same typing) */
type IconValue = typeof Icons['AcademicCapIcon'];
type IconIntent =
  | Extract<
      PaletteIntents,
      'primary' | 'success' | 'danger' | 'warning' | 'info'
    >
  | 'default';

type IconProps = {
  /**
   * Sets the icon that renders
   */
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

/** private icon props, used for StyledIcon component */
type InternalIconProps = Omit<IconProps, 'icon' | 'size' | 'intent'> & {
  Icon: IconValue;
  size: any;
  intent: any;
};

export type {
  HeroIconNames,
  HeroIconSet,
  IconIntent,
  IconProps,
  Icons,
  IconValue,
  InternalIconProps,
};
