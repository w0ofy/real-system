import type { StylishProps } from '@real-system/styling-library';

import { textPrimitiveStyles } from './text';
import type { ThemeConfigFnArgs } from './types';

type StyleArgs = ThemeConfigFnArgs<{
  disabled?: boolean;
  cursor: StylishProps['cursor'];
}>;

const parts = {
  text: {
    baseStyles: ({ disabled, cursor }: StyleArgs) => ({
      display: 'block',
      padding: 0,
      margin: 0,
      marginBottom: 3,
      fontSize: 1,
      fontWeight: 3,
      lineHeight: 1,
      color: disabled ? 'color-text-disabled-strong-3' : 'color-text',
      cursor: disabled ? 'not-allowed' : cursor,
    }),
  },
  innerSpan: {
    baseStyles: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  requiredDot: {
    baseStyles: ({ disabled, cursor }: StyleArgs) => ({
      cursor: disabled ? 'not-allowed' : cursor,
    }),
  },
};

const labelTheme = {
  baseStyles: textPrimitiveStyles,
  parts,
};

type LabelTheme = typeof labelTheme;

export type { LabelTheme };
export { labelTheme };
