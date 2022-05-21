import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const typographyProps: StylePropConfig<TypographyProps> = {
  fontFamily: {
    property: 'fontFamily',
    scale: STYLE_PROP_SCALES.fonts,
  },
  fontSize: {
    property: 'fontSize',
    scale: STYLE_PROP_SCALES.fontSizes,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: STYLE_PROP_SCALES.fontWeights,
  },
  lineHeight: {
    property: 'lineHeight',
    scale: STYLE_PROP_SCALES.lineHeights,
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: STYLE_PROP_SCALES.letterSpacings,
  },
  textAlign: true,
  fontStyle: true,
  whiteSpace: true,
  textOverflow: true,
  wordBreak: true,
  wordWrap: true,
  overflowWrap: true,
  textTransform: true,
  textDecoration: true,
  textShadow: true,
};

type TypographyProps = {
  fontFamily?: Token<CSS.FontFamily, 'fonts'>;
  fontSize?: Token<CSS.FontSize, 'fontSizes'>;
  fontWeight?: Token<CSS.FontWeight, 'fontWeights'>;
  lineHeight?: Token<CSS.LineHeight, 'lineHeights'>;
  letterSpacing?: Token<CSS.LetterSpacing, 'letterSpacings'>;
  textAlign?: Token<CSS.TextAlign>;
  fontStyle?: Token<CSS.FontStyle>;
  whiteSpace?: Token<CSS.WhiteSpace>;
  textOverflow?: Token<CSS.TextOverflow>;
  wordBreak?: Token<CSS.WordBreak>;
  wordWrap?: Token<CSS.WordWrap>;
  overflowWrap?: Token<CSS.OverflowWrap>;
  textTransform?: Token<CSS.TextTransform>;
  textDecoration?: Token<CSS.TextDecoration>;
  textShadow?: Token<CSS.TextShadow>;
};

export type { TypographyProps };
export { typographyProps };
