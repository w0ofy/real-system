import { textPrimitiveStyles } from './text';

const variants = {
  heading1: () => ({
    fontSize: 7,
    lineHeight: 7,
    fontWeight: 3,
    marginBottom: 5,
    color: 'color-text-neutral-strong-3',
  }),
  heading2: () => ({
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 3,
    marginBottom: 4,
    color: 'color-text-neutral-strong-3',
  }),
  heading3: () => ({
    fontSize: 4,
    lineHeight: 4,
    fontWeight: 2,
    marginBottom: 3,
    color: 'color-text-neutral-strong-3',
  }),
  heading4: () => ({
    fontSize: 3,
    lineHeight: 3,
    fontWeight: 2,
    marginBottom: 3,
    color: 'color-text-neutral-strong-3',
  }),
  heading5: () => ({
    fontSize: 2,
    lineHeight: 2,
    fontWeight: 2,
    marginBottom: 2,
    color: 'color-text-neutral-strong-3',
  }),
  heading6: () => ({
    fontSize: 1,
    lineHeight: 1,
    fontWeight: 2,
    marginBottom: 1,
    color: 'color-text-neutral-strong-3',
  }),
};

const headingTheme = {
  baseStyles: textPrimitiveStyles,
  variants,
};

type HeadingTheme = typeof headingTheme;

export type { HeadingTheme };
export { headingTheme };
