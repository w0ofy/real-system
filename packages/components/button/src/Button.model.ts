import * as React from 'react';

import type {
  ColorSchemes,
  RealSystemComponentProps,
  ThemeSizes,
} from '@real-system/styled-library';
import type { OmitAndJoinProps } from '@real-system/utils-library';

type ButtonVariants = 'outline' | 'fill' | 'minimal' | 'floating';
type ButtonSize = Extract<
  ThemeSizes,
  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
>;

type RealSystemButtonProps = RealSystemComponentProps<'button'>;
type CustomButtonProps = {
  /** sets the disabled state of the button */
  disabled?: boolean;
  /** sets the loading state of the button */
  loading?: boolean;
  /** inserts a leading icon */
  leadingIcon?: React.ReactElement;
  /** inserts a trailing icon */
  trailingIcon?: React.ReactElement;
  /** controls button variant */
  variant?: ButtonVariants;
  /** controls the size of the button */
  size?: ButtonSize;
  /** sets color scheme of the button; color scheme is dictated by the `palette` which dictates the `theme` object from `ThemeProvider` */
  colorScheme?: ColorSchemes;
};

/**
 * @todo maybe add _expanded pseudo style prop ??? see chakra-ui for MenuButton example
 */
type ButtonProps = OmitAndJoinProps<RealSystemButtonProps, CustomButtonProps>;

export type { ButtonProps, ButtonSize, ButtonVariants };
