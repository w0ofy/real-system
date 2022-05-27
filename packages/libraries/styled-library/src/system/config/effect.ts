import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const effectProps: StylePropConfig<EffectProps> = {
  boxShadow: {
    property: 'boxShadow',
    scale: STYLE_PROP_SCALES.shadows,
  },
  opacity: true,
};

type EffectProps = {
  /**
   * The CSS `boxShadow` property
   */
  boxShadow?: Token<CSS.BoxShadow, 'shadows'>;
  /**
   * The CSS `opacity` property
   */
  opacity?: Token<CSS.Opacity>;
};

export type { EffectProps };
export { effectProps };
