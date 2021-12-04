/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  opacity,
  overflow,
  position,
  shadow,
  space,
  typography,
} from '@real-system/styling';

import { realSystemProps } from './realSystemProps';
import { composeBoxStyleProps } from './styleProps';

const BOX_STYLE_PROPS = composeBoxStyleProps().propNames!;
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
const REAL_SYSTEM_PROPS = compose(realSystemProps).propNames!;

export {
  BACKGROUND_PROPS,
  BORDER_PROPS,
  BOX_STYLE_PROPS,
  COLOR_PROPS,
  FLEXBOX_PROPS,
  GRID_PROPS,
  LAYOUT_PROPS,
  OPACITY_PROPS,
  OVERFLOW_PROPS,
  POSITION_PROPS,
  REAL_SYSTEM_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TEXT_PROPS,
};
