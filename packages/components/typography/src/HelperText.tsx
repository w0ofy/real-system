import React, { forwardRef, useMemo } from 'react';

import { Icon } from '@real-system/icon';
import type { ColorSchemes, ColorTokens } from '@real-system/styled-library';
import { isUndefinedOrNull } from '@real-system/utils-library';

import { BaseText } from './BaseText';
import type { CommonTextProps } from './types';

export type InvalidConfig = {
  status: boolean;
  message?: string;
  /**
   * Hides the "invalid icon". This value is prioritized over `hideInvalidIcon` prop.
   */
  hideIcon?: boolean;
};

export type HelperTextProps = {
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'div'>;
  children?: React.ReactNode;
  id?: string;
  hideInvalidIcon?: boolean;
  invalid?: boolean | InvalidConfig;
} & CommonTextProps;

const LABEL_COLORS: Partial<Record<ColorSchemes, ColorTokens>> = {
  red: 'red-500',
  gray: 'gray-500',
};

type DefaultConfig = {
  colorScheme: Extract<ColorSchemes, 'red' | 'gray'>;
  text: React.ReactNode;
  isInvalid: boolean;
  hideIcon: boolean;
};

const HelperText = forwardRef<HTMLSpanElement, HelperTextProps>(
  function HelperText(
    { children, as = 'span', hideInvalidIcon = false, invalid, ...restProps },
    ref
  ) {
    const { colorScheme, text, isInvalid, hideIcon }: DefaultConfig =
      useMemo(() => {
        const defaultConfig: DefaultConfig = {
          colorScheme: 'gray',
          text: children,
          isInvalid: false,
          hideIcon: hideInvalidIcon,
        };

        if (isUndefinedOrNull(invalid)) {
          return defaultConfig;
        }

        if (typeof invalid === 'boolean') {
          if (invalid) {
            return {
              colorScheme: 'red',
              text: children,
              isInvalid: true,
              hideIcon: hideInvalidIcon,
            };
          }
          return defaultConfig;
        }

        const { status, message, hideIcon: hideIconProp } = invalid;

        const noTextProvided = !children && !message;
        const hideIcon = noTextProvided || hideIconProp || hideInvalidIcon;

        if (status) {
          return {
            colorScheme: 'red',
            isInvalid: status,
            text: message || children,
            hideIcon,
          };
        }

        return {
          ...defaultConfig,
          hideIcon,
        };
      }, [children, invalid, hideInvalidIcon]);

    if (!children) {
      if (typeof invalid !== 'boolean' && !invalid?.status) {
        return null;
      } else if (!invalid) {
        return null;
      }
    }
    return (
      <BaseText
        as={as}
        display="flex"
        alignItems="center"
        padding={0}
        margin={0}
        fontScale="helper"
        fontWeight="helper"
        color={LABEL_COLORS[colorScheme]}
        {...restProps}
        ref={ref}>
        {!hideIcon && isInvalid && (
          <div>
            <Icon
              icon="exclamation-circle"
              solid
              colorScheme={colorScheme}
              marginRight={2}
            />
          </div>
        )}
        <span>{text}</span>
      </BaseText>
    );
  }
);

export { HelperText };
