import * as IconComponents from '@heroicons/react/outline';

import type {
  ColorSchemes,
  StylishProps,
  ThemeSizes,
} from '@real-system/styled-library';
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

type IconProps = {
  /**
   * Sets the icon that renders
   */
  icon: Icons;
  /**
   * Controls the size of the icon
   */
  size?: ThemeSizes;
  /**
   * Overrides colorScheme and can be used to customize the icon color beyond what colorScheme provides i.e. a checkmark for Checkbox component
   */
  color?: StylishProps['color'];
  /** Sets color scheme of the icon; color scheme is dictated by the `palette` which dictates the `theme` object from `RealSystemProvider` */
  colorScheme?: ColorSchemes;
  /**
   * Controls solid or outline (default) icon style
   */
  solid?: boolean;
  /**
   * Sets the title of the svg
   */
  title?: string;
} & StylishProps;

/** private icon props, used for StyledIcon component */
type InternalIconProps = Omit<IconProps, 'icon' | 'size'> & {
  Icon: IconValue;
  size: any;
  color: any;
};

export type {
  HeroIconNames,
  HeroIconSet,
  IconProps,
  Icons,
  IconValue,
  InternalIconProps,
};
