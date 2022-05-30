import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const colorProps: StylePropConfig<ColorProps> = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  bgColor: {
    property: 'backgroundColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  foreground: {
    properties: ['color', 'borderColor'],
    scale: STYLE_PROP_SCALES.colors,
  },
  color: {
    property: 'color',
    scale: STYLE_PROP_SCALES.colors,
  },
  fill: {
    property: 'fill',
    scale: STYLE_PROP_SCALES.colors,
  },
};

type ColorProps = {
  /**
   * The CSS `backgroundColor` property
   */
  backgroundColor?: Token<CSS.BackgroundColor, 'colors'>;
  /**
   * The CSS `backgroundColor` property
   */
  bgColor?: Token<CSS.BackgroundColor, 'colors'>;
  /**
   * The CSS `border-color` and `color` properties
   */
  foreground?: Token<CSS.Color, 'colors'>;
  /**
   * The CSS `color` property
   */
  color?: Token<CSS.Color, 'colors'>;
  /**
   * The CSS `fill` property
   */
  fill?: Token<CSS.Fill, 'colors'>;
};

export type { ColorProps };
export { colorProps };
