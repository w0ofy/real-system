import { Property as CSS } from 'csstype';

import type { Length, StylePropConfig, Token } from './_types';

const transformProps: StylePropConfig<TransformProps> = {
  clipPath: true,
  transform: true,
  transformOrigin: true,
  translateX: true,
  translateY: true,
  skewX: true,
  skewY: true,
  scaleX: true,
  scaleY: true,
  scale: true,
  rotate: true,
};

type TransformProps = {
  /**
   * The CSS `transform` property
   */
  transform?: Token<CSS.Transform>;
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: Token<CSS.TransformOrigin, 'sizes'>;
  /**
   * The CSS `clip-path` property.
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Token<CSS.ClipPath>;
  /**
   * Translate value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-translate-x`
   */
  translateX?: Token<Length>;
  /**
   * Translate value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-translate-y`
   */
  translateY?: Token<Length>;
  /**
   * Sets the rotate value of the element
   */
  rotate?: Token<Length>;
  /**
   * Skew value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-skew-x`
   */
  skewX?: Token<Length>;
  /**
   * Skew value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-skew-y`
   */
  skewY?: Token<Length>;
  /**
   * Scale value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-scale-x`
   */
  scaleX?: Token<Length>;
  /**
   * Scale value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-scale-y`
   */
  scaleY?: Token<Length>;
  /**
   * Sets the scale value of the element
   */
  scale?: Token<Length>;
};

export type { TransformProps };
export { transformProps };
