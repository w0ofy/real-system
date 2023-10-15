import type { Property as CSS } from 'csstype';

import type { StylePropConfig, Token } from './_types';

const transformProps: StylePropConfig<TransformProps> = {
  clip: true,
  clipPath: true,
  transform: true,
  transformOrigin: true,
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
   * The CSS `clip` property
   */
  clip?: Token<CSS.Clip>;
  /**
   * The CSS `clip-path` property
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Token<CSS.ClipPath>;
};

export type { TransformProps };
export { transformProps };
