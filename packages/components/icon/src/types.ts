import * as Icons from '@heroicons/react/solid';

import type { MarginProps } from '@real-system/styling';
import type { PaletteIntents, ThemeTokens } from '@real-system/theme';
import type { KebabCase } from '@real-system/utils';

type IconKeys = keyof typeof Icons;
type IconValues = typeof Icons[IconKeys];
type Icons = KebabCase<IconKeys>;
type IconIntent =
  | Extract<
      PaletteIntents,
      'primary' | 'success' | 'danger' | 'warning' | 'info'
    >
  | 'default';
type IconProps = {
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
  solid?: boolean;
} & MarginProps;

export type { IconIntent, IconKeys, IconProps, Icons, IconValues };
