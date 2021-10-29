import React, { forwardRef } from 'react';
import * as Feather from 'react-feather';

import { Box, BoxAs } from '@realsystem/box';
import styled from '@realsystem/styling';
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
    {
      size = 'size-icon-20',
      icon,
      intent = 'default',
      currentColor = true,
      ...restProps
    },
    ref
  ): React.ReactElement<SVGElement> => {
    const theme = useTheme();
    const iconSize = getToken(size, 'sizes')({ theme });
    const iconIntent = currentColor
      ? 'currentColor'
      : getToken(INTENT_MAP[intent])({ theme });

    return (
      <Box
        as="span"
        display="flex"
        flexShrink={0}
        flexGrow={0}
        width={iconSize}
        height={iconSize}
        {...restProps}>
        <BoxAsIcon
          ref={ref}
          icon={icon}
          alt={icon}
          title={icon}
          size={iconSize}
          color={iconIntent}
        />
      </Box>
    );
  }
);

IconApi.displayName = 'Icon';

const Icon = styled(IconApi)<IconProps>({});

export { Icon, ICONS };
export type { IconProps, Icons };
