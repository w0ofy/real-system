import React, { forwardRef, useMemo } from 'react';

import { Icon } from '@real-system/icon';
import type {
  ColorSchemes,
  ColorTokens,
  ThemeStatuses,
} from '@real-system/styled-library';

import type { CommonTextProps } from '../Text.model';

import { BaseText } from './BaseText';

export type InvalidConfig = {
  status: boolean;
  message?: string;
  /**
   * Hides the "invalid icon". This value is prioritized over `hideIcon` prop.
   */
  hideIcon?: boolean;
};

export type HelpTextProps = {
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'div'>;
  children?: React.ReactNode;
  id?: string;
  hideIcon?: boolean;
  variant?: Extract<ThemeStatuses, 'warning' | 'danger'> | 'default';
} & CommonTextProps;

const LABEL_COLORS: Partial<Record<ColorSchemes, ColorTokens>> = {
  red: 'red-500',
  gray: 'gray-500',
  orange: 'orange-500',
};

type HelpTextConfig = {
  colorScheme: Extract<ColorSchemes, 'red' | 'gray' | 'orange'>;
  text: React.ReactNode;
  hideIcon: boolean;
};

const HelpText = forwardRef<HTMLSpanElement, HelpTextProps>(function HelpText(
  {
    children,
    as = 'span',
    hideIcon: hideIconProp = false,
    variant = 'default',
    ...restProps
  },
  ref
) {
  const { colorScheme, text, hideIcon }: HelpTextConfig = useMemo(() => {
    const defaultConfig: HelpTextConfig = {
      colorScheme: 'gray',
      text: children,
      hideIcon: true,
    };

    switch (variant) {
      case 'danger':
        return {
          colorScheme: 'red',
          text: children,
          hideIcon: hideIconProp,
        };
      case 'warning':
        return {
          colorScheme: 'red',
          text: children,
          hideIcon: hideIconProp,
        };
      default:
        return defaultConfig;
    }
  }, [children, hideIconProp, variant]);

  if (!children) {
    return null;
  }

  return (
    <BaseText
      as={as}
      display="flex"
      alignItems="center"
      padding={0}
      margin={0}
      fontScale="help"
      fontWeight="help"
      color={LABEL_COLORS[colorScheme]}
      {...restProps}
      ref={ref}>
      {!hideIcon && (
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
});

export { HelpText };
