import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const colorProps: StylePropConfig<ColorProps> = {
  textColor: {
    property: 'color',
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
  textColor?: Token<CSS.Color, 'colors'>;
  color?: Token<CSS.Color, 'colors'>;
  fill?: Token<CSS.Fill, 'colors'>;
};

export type { ColorProps };
export { colorProps };
