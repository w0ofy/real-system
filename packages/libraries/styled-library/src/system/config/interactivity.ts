import type { Property as CSS } from 'csstype';

import { STYLE_PROP_SCALES } from './_constants';
import type { StylePropConfig, Token } from './_types';

const interactivityProps: StylePropConfig<InteractivityProps> = {
  appearance: true,
  outline: true,
  outlineColor: {
    property: 'outlineColor',
    scale: STYLE_PROP_SCALES.colors,
  },
  outlineWidth: {
    property: 'outlineWidth',
    scale: STYLE_PROP_SCALES.borderWidths,
  },
  outlineOffset: true,
  outlineStyle: true,
  cursor: true,
  pointerEvents: true,
  resize: true,
};

type InteractivityProps = {
  /**
   * The CSS `appearance` property
   */
  appearance?: Token<CSS.Appearance>;
  /**
   * The CSS `outline` property
   */
  outline?: Token<CSS.Outline>;
  /**
   * The CSS `outlineColor` property
   */
  outlineColor?: Token<CSS.OutlineColor>;
  /**
   * The CSS `outlineWidth` property
   */
  outlineWidth?: Token<CSS.OutlineWidth>;
  /**
   * The CSS `outlineOffset` property
   */
  outlineOffset?: Token<CSS.OutlineOffset>;
  /**
   * The CSS `outlineStyle` property
   */
  outlineStyle?: Token<CSS.OutlineStyle>;
  /**
   * The CSS `cursor` property
   */
  cursor?: Token<CSS.Cursor>;
  /**
   * The CSS `pointerEvents` property
   */
  pointerEvents?: Token<CSS.PointerEvents>;
  /**
   * The CSS `resize` property
   */
  resize?: Token<CSS.Resize, 'space'>;
};

export type { InteractivityProps };
export { interactivityProps };
