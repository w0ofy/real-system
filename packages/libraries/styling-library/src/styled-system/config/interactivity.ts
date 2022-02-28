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
  appearance?: Token<CSS.Appearance>;
  outline?: Token<CSS.Outline>;
  outlineColor?: Token<CSS.OutlineColor>;
  outlineWidth?: Token<CSS.OutlineWidth>;
  outlineOffset?: Token<CSS.OutlineOffset>;
  outlineStyle?: Token<CSS.OutlineStyle>;
  cursor?: Token<CSS.Cursor>;
  pointerEvents?: Token<CSS.PointerEvents>;
  resize?: Token<CSS.Resize, 'space'>;
};

export type { InteractivityProps };
export { interactivityProps };
