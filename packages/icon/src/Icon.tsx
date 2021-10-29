import React, { forwardRef } from 'react';
import * as Feather from 'react-feather';

import { BoxAs } from '@realsystem/box';
import { getToken, ThemeTokens, useTheme } from '@realsystem/theme';

import {
  IconIntent,
  IconProps,
  ICONS,
  Icons,
  InternalIconProps,
} from './types';

const BoxAsIcon = BoxAs<Pick<IconProps, 'icon'> & InternalIconProps>(
  ({ icon, ...restProps }) => {
    const Icon = Feather[icon];
    return <Icon {...restProps} />;
  }
);

const INTENT_MAP: { [key in IconIntent]: ThemeTokens } = {
  default: 'color-text',
  brand: 'color-text-brand',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
};

const IconApi = forwardRef<HTMLOrSVGElement, IconProps>(
  (
    { size = 'size-icon-10', icon, intent = 'default', ...restProps },
    ref
  ): React.ReactElement<SVGElement> => {
    const theme = useTheme();
    const iconSize = getToken(size, 'sizes')({ theme });
    const iconIntent = getToken(INTENT_MAP[intent])({ theme });

    return (
      <BoxAsIcon
        {...restProps}
        ref={ref}
        icon={icon}
        alt={icon}
        title={icon}
        size={iconSize}
        color={iconIntent}
      />
    );
  }
);

IconApi.displayName = 'Icon';

const Icon = IconApi;

export { Icon, ICONS };
export type { IconProps, Icons };
