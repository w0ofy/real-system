import * as Feather from 'react-feather';

import { BoxProps } from '@real-system/box';
import { SpaceProps } from '@real-system/styling';
import { PaletteIntents, ThemeTokens } from '@real-system/theme';
import { KebabCase } from '@real-system/utils';

export type FeatherIconKeys = keyof typeof Feather;
export type FeatherIconValues = typeof Feather[FeatherIconKeys];
export type InternalIconProps = Omit<IconProps, 'size'> & Feather.IconProps;
export type Icons = KebabCase<FeatherIconKeys>;
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
} & SpaceProps &
  Pick<BoxProps, 'tabIndex'>;
