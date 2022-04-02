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
  bgImage: {
    property: 'backgroundColor',
  },
  backgroundSize: true,
  bgSize: {
    property: 'backgroundSize',
  },
  backgroundPosition: true,
  bgPosition: {
    property: 'backgroundPosition',
  },
  backgroundRepeat: true,
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  backgroundClip: true,
  bgClip: {
    property: 'backgroundClip',
  },
  bgGradient: {
    property: 'backgroundImage',
  },
};

type BackgroundProps = {
  /**
   * The CSS `backgroundImage` property
   */
  backgroundImage?: Token<CSS.BackgroundImage, 'colors'>;
  /**
   * The shorthand for CSS `backgroundImage` property
   */
  bgImage?: Token<CSS.BackgroundImage, 'colors'>;
  /**
   * The renamed shorthand for CSS `backgroundImage` property
   */
  bgGradient?: Token<CSS.BackgroundImage, 'colors'>;
  /**
   * The CSS `backgroundSize` property
   */
  backgroundSize?: Token<CSS.BackgroundSize, 'colors'>;
  /**
   * The shorthand for CSS `backgroundSize` property
   */
  bgSize?: Token<CSS.BackgroundSize, 'colors'>;
  /**
   * The CSS `backgroundPosition` property
   */
  backgroundPosition?: Token<CSS.BackgroundPosition, 'colors'>;
  /**
   * The shorthand for CSS `backgroundPosition` property
   */
  bgPosition?: Token<CSS.BackgroundPosition, 'colors'>;
  /**
   * The CSS `backgroundRepeat` property
   */
  backgroundRepeat?: Token<CSS.BackgroundRepeat, 'colors'>;
  /**
   * The shorthand for CSS `backgroundRepeat` property
   */
  bgRepeat?: Token<CSS.BackgroundRepeat, 'colors'>;
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
  /**
   * The CSS `backgroundClip` property
   */
  backgroundClip?: Token<CSS.BackgroundClip, 'colors'>;
  /**
   * The shorthand for CSS `backgroundClip` property
   */
  bgClip?: Token<CSS.BackgroundClip, 'colors'>;
};

export type { BackgroundProps };
export { backgroundProps };
