const textPrimitiveStyles = {
  color: 'color-text',
  fontSize: 1,
  fontWeight: 0,
  lineHeight: 4,
  margin: 0,
};

const variants = {
  paragraph: () => ({
    lineHeight: 2,
    marginBottom: 2,
  }),
  inline: () => ({
    lineHeight: 2,
    marginBottom: 2,
  }),
};

const textTheme = {
  baseStyles: textPrimitiveStyles,
  variants,
};

type TextTheme = typeof textTheme;

export type { TextTheme };
export { textPrimitiveStyles, textTheme };
