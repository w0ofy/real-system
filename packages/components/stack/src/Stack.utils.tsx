import { ResponsiveValue, StylishProps } from '@real-system/styled-library';
import { mapResponsive } from '@real-system/utils-library';

export type StackOrientation = ResponsiveValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse'
>;

export const selector = '& > *:not(style) ~ *:not(style)';

interface Options {
  spacing: StylishProps['margin'];
  orientation: StackOrientation;
}

export function getStackStyles(options: Options) {
  const { spacing, orientation } = options;

  const orientationStyles = {
    column: {
      marginTop: spacing,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0,
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: spacing,
    },
    'column-reverse': {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing,
      marginStart: 0,
    },
    'row-reverse': {
      marginTop: 0,
      marginEnd: spacing,
      marginBottom: 0,
      marginStart: 0,
    },
  };

  return {
    flexDirection: orientation,
    [selector]: mapResponsive(
      orientation,
      (value: keyof typeof orientationStyles) => orientationStyles[value]
    ),
  };
}

export function getDividerStyles(options: Options) {
  const { spacing, orientation } = options;

  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: '1px',
    },
    'column-reverse': {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: '1px',
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: '1px',
      borderBottomWidth: 0,
    },
    'row-reverse': {
      mx: spacing,
      my: 0,
      borderLeftWidth: '1px',
      borderBottomWidth: 0,
    },
  };

  return {
    '&': mapResponsive(
      orientation,
      (value: keyof typeof dividerStyles) => dividerStyles[value]
    ),
  };
}
