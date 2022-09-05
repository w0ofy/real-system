import * as React from 'react';

import type {
  ColorSchemes,
  RealSystemComponentProps,
  ThemeSizes,
} from '@real-system/styled-library';

type ButtonVariants = 'outline' | 'fill' | 'minimal' | 'floating';
type ButtonSize = Extract<
  ThemeSizes,
  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
>;

type ButtonStates = 'disabled' | 'loading' | 'default';

type ButtonProps = RealSystemComponentProps & {
  /** sets the loading state of the buttons */
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

export type { ButtonProps, ButtonSize, ButtonStates, ButtonVariants };
