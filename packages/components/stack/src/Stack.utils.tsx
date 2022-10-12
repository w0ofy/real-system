import { ResponsiveValue, StylishProps } from '@real-system/styled-library';
import { mapResponsive } from '@real-system/utils-library';

export type StackDirection = ResponsiveValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse'
>;

export const selector = '& > *:not(style) ~ *:not(style)';

type Options = {
  spacing: StylishProps['margin'];
  direction: StackDirection;
};

export function getStackStyles(options: Options) {
  const { spacing, direction } = options;

  const directionStyles = {
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
    flexDirection: direction,
    [selector]: mapResponsive(
      direction,
      (value: keyof typeof directionStyles) => directionStyles[value]
    ),
  };
}

export function getSeparatorStyles(options: Options) {
  const { spacing, direction } = options;

  const separatorStyles = {
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
      direction,
      (value: keyof typeof separatorStyles) => separatorStyles[value]
    ),
  };
}
