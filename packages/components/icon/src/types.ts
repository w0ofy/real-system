import * as IconComponents from '@heroicons/react/outline';

import type { BoxStyleProps } from '@real-system/box-primitive';
import type { PaletteIntents, PaletteSizes } from '@real-system/theme-library';
import type { KebabCase, RemoveSuffix } from '@real-system/utils-library';

/** Hero Icon types */
type HeroIconSet = typeof IconComponents;
type HeroIconNames = keyof HeroIconSet;

/** Raw/unformatted icons */
type RawIcons = KebabCase<HeroIconNames>;

/**
 ** real system formatted icons
 * This removes "-icon" suffix in order to make icon names more simple
 * this is coupled with the `getIcon` util -- if this changes, so should `getIcon` */
type Icons = RemoveSuffix<RawIcons, '-icon'>;

/** typeof an icon component (selected any icon, it doesn't matter. They should all have the same typing) */
type IconValue = typeof IconComponents['AcademicCapIcon'];
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
  size?: PaletteSizes;
  /**
   * Controls the color of the icon. If an `intent` is not provided the color defaults to `currentColor`
   */
  intent?: IconIntent | string;
  /**
   * Overrides intent and can be used to customize the icon color beyond what intent provides i.e. a checkmark for Checkbox component
   */
  color?: BoxStyleProps['color'];
  /**
   * Controls solid or default (outline) icon style
   */
  solid?: boolean;
  /**
   * Sets the title of the svg
   */
  title?: string;
} & BoxStyleProps;

/** private icon props, used for StyledIcon component */
type InternalIconProps = Omit<IconProps, 'icon' | 'size' | 'intent'> & {
  Icon: IconValue;
  size: any;
  color: any;
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
