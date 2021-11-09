import React, { forwardRef, useCallback } from 'react';

import { Box, BoxAs } from '@real-system/box';
import {
  getToken,
  ThemeScales,
  ThemeTokens,
  useTheme,
} from '@real-system/theme';

import { ICON_NAMES, ICONS } from './icons';
import { IconIntent, IconProps, Icons, InternalIconProps } from './types';

const BoxAsIcon = BoxAs<InternalIconProps>(({ icon, ...restProps }) => {
  const Icon = ICONS[icon];
  return <Icon {...restProps} />;
});

const INTENT_MAP: { [key in IconIntent]: ThemeTokens } = {
  default: 'color-text',
  primary: 'color-text-brand',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
  info: 'color-text-info',
};

/**
 * @todo add a11y props and functionnality
 */
const Icon = forwardRef<HTMLOrSVGElement, IconProps>(
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

Icon.displayName = 'Icon';

export { Icon, ICON_NAMES, ICONS };
export type { IconProps, Icons };
