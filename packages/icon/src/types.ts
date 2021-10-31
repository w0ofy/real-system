import * as Feather from 'react-feather';

import { SpaceProps } from '@realsystem/styling';
import { PaletteIntents, ThemeTokens } from '@realsystem/theme';
import { KebabCase, kebabCase } from '@realsystem/utils';

type FeatherIcons = keyof typeof Feather;
export type InternalIconProps = Feather.IconProps;
export type Icons = KebabCase<FeatherIcons>;
export type IconIntent =
  | Extract<
      PaletteIntents,
      'primary' | 'success' | 'danger' | 'warning' | 'info'
    >
  | 'default';
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

type IconsMap = { [key in Icons]: Icons };

const ICONS = (() => {
  const featherIcons = Object.keys(Feather) as FeatherIcons[];
  const icons = featherIcons.reduce((o, rawKey) => {
    const key = kebabCase<typeof rawKey>(rawKey);
    return { ...o, [key]: key };
  }, {} as IconsMap);

  return icons;
})();

export { ICONS };
