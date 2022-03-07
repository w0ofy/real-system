import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const backgroundProps: StylePropConfig<BackgroundProps> = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  bgColor: {
    property: 'backgroundColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  background: true,
  bg: {
    property: 'background',
  },
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
};

type BackgroundProps = {
  /**
   * The CSS `backgroundImage` property
   */
  backgroundImage?: Token<CSS.BackgroundImage, 'colors'>;
  /**
   * The CSS `backgroundSize` property
   */
  backgroundSize?: Token<CSS.BackgroundSize, 'colors'>;
  /**
   * The CSS `backgroundPosition` property
   */
  backgroundPosition?: Token<CSS.BackgroundPosition, 'colors'>;
  /**
   * The CSS `backgroundRepeat` property
   */
  backgroundRepeat?: Token<CSS.BackgroundRepeat, 'colors'>;
  /**
   * The CSS `backgroundColor` property
   */
  backgroundColor?: Token<CSS.BackgroundColor, 'colors'>;
  /**
   * The CSS `backgroundColor` property
   */
  bgColor?: Token<CSS.BackgroundColor, 'colors'>;
  /**
   * The CSS `background` property
   */
  background?: Token<CSS.Background, 'colors'>;
  /**
   * The CSS `background` property
   */
  bg?: Token<CSS.Background, 'colors'>;
};

export type { BackgroundProps };
export { backgroundProps };
