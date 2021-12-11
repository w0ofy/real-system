import React, { forwardRef, useCallback, useMemo } from 'react';

import { Box } from '@real-system/box';
import styled from '@real-system/styling';
import {
  getToken,
  ThemeScales,
  ThemeTokens,
  useTheme,
} from '@real-system/theme';

import { ICON_NAMES, OUTLINE_ICONS, SOLID_ICONS } from './icons';
import { IconIntent, IconProps, Icons } from './types';

const INTENT_MAP: { [key in IconIntent]: ThemeTokens } = {
  default: 'color-text',
  primary: 'color-text-brand',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
  info: 'color-text-info',
};

const StyledIcon = styled(({ icon, solid, ...restProps }: IconProps) => {
  const Icon = solid ? SOLID_ICONS[icon] : OUTLINE_ICONS[icon];
  return <Icon {...(restProps as any)} />;
})`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  color: ${({ intent }) => intent};
`;

/**
 * @todo add a11y props and functionnality
 */
const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ size = 'size-icon-30', icon, intent, solid, ...restProps }, ref) => {
    const theme = useTheme();
    const token = useCallback(
      (token: ThemeTokens, scale?: ThemeScales) =>
        getToken(token, scale)({ theme }),
      [theme]
    );
    const iconSize = useMemo(() => token(size, 'sizes'), [token, size]);
    const iconIntent = useMemo(
      () => (!intent ? 'currentColor' : token(INTENT_MAP[intent])),
      [intent, token]
    );

    return (
      <Box
        ref={ref}
        as="span"
        display="flex"
        flexShrink={0}
        flexGrow={0}
        width={iconSize}
        height={iconSize}
        _focus={{
          outline: '2px solid',
          outlineColor: 'color-border-primary',
        }}
        {...restProps}>
        <StyledIcon
          icon={icon}
          solid={solid}
          size={iconSize}
          intent={iconIntent}
        />
      </Box>
    );
  }
);

Icon.displayName = 'Icon';

export { Icon, ICON_NAMES };
export type { IconProps, Icons };
