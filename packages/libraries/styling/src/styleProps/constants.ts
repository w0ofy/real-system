/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  margin,
  opacity,
  overflow,
  position,
  shadow,
  space,
  typography,
} from '../internalExports/styledSystem';

import { realSystemProps } from './realSystemProps';
import { composeStyleProps } from './styleProps';

const STYLE_PROPS = composeStyleProps().propNames!;
const BACKGROUND_PROPS = compose(background).propNames!;
const BORDER_PROPS = compose(border).propNames!;
const COLOR_PROPS = compose(color).propNames!;
const FLEXBOX_PROPS = compose(flexbox).propNames!;
const GRID_PROPS = compose(grid).propNames!;
const LAYOUT_PROPS = compose(layout).propNames!;
const OPACITY_PROPS = compose(opacity).propNames!;
const OVERFLOW_PROPS = compose(overflow).propNames!;
const POSITION_PROPS = compose(position).propNames!;
const SHADOW_PROPS = compose(shadow).propNames!;
const SPACE_PROPS = compose(space).propNames!;
const TEXT_PROPS = compose(typography).propNames!;
const MARGIN_PROPS = compose(margin).propNames!;
const REAL_SYSTEM_PROPS = compose(realSystemProps).propNames!;

export {
  BACKGROUND_PROPS,
  BORDER_PROPS,
  COLOR_PROPS,
  FLEXBOX_PROPS,
  GRID_PROPS,
  LAYOUT_PROPS,
  MARGIN_PROPS,
  OPACITY_PROPS,
  OVERFLOW_PROPS,
  POSITION_PROPS,
  REAL_SYSTEM_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  STYLE_PROPS,
  TEXT_PROPS,
};
