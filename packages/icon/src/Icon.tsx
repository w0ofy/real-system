import React, { forwardRef, useCallback } from 'react';
import * as Feather from 'react-feather';

import { Box, BoxAs } from '@realsystem/box';
import styled from '@realsystem/styling';
import {
  getToken,
  ThemeScales,
  ThemeTokens,
  useTheme,
} from '@realsystem/theme';

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
  primary: 'color-text-primary',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
  info: 'color-text-info',
};

const IconApi = forwardRef<HTMLOrSVGElement, IconProps>(
  (
    { size = 'size-icon-20', icon, intent, ...restProps },
    ref
  ): React.ReactElement<SVGElement> => {
    const theme = useTheme();
    const token = useCallback(
      (token: ThemeTokens, scale?: ThemeScales) =>
        getToken(token, scale)({ theme }),
      [theme]
    );
    const iconSize = token(size, 'sizes');
    const iconIntent = !intent ? 'currentColor' : token(INTENT_MAP[intent]);

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
