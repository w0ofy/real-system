import * as Feather from 'react-feather';

import { SpaceProps } from '@realsystem/styling';
import { ThemeTokens } from '@realsystem/theme';

export type InternalIconProps = Feather.IconProps;
export type Icons = keyof typeof Feather;
export type IconIntent = 'default' | 'brand' | 'success' | 'danger' | 'warning';
export type IconProps = {
  icon: Icons;
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
  intent?: IconIntent;
} & SpaceProps;

const ICONS = (() => {
  const icons = {};
  Object.keys(Feather).forEach((icon) => (icons[icon] = icon));
  return icons as { [key in Icons]: Icons };
})();

export { ICONS };
