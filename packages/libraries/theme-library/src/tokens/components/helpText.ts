import { textPrimitiveStyles } from './text';

const parts = {
  text: {
    baseStyles: {
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      marginTop: 3,
      fontSize: 1,
      fontWeight: 0,
      lineHeight: 1,
    },
    intents: {
      default: () => ({
        color: 'color-text-neutral-weak-1',
      }),
      danger: () => ({
        color: 'color-text-danger',
      }),
    },
  },
  icon: {
    baseStyles: { marginRight: 2 },
  },
};

const helpTextTheme = {
  baseStyles: textPrimitiveStyles,
  parts,
};

type HelpTextTheme = typeof helpTextTheme;

export type { HelpTextTheme };
export { helpTextTheme };
