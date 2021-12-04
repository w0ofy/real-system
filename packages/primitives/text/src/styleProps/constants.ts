/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { compose } from '@real-system/styling';

import { realSystemProps } from './realSystemProps';
import {
  color,
  flexbox,
  layout,
  overflow,
  position,
  shadow,
  space,
  typography,
} from './styleProps';
import { composeTextStyleProps } from './styleProps';
const COLOR_PROPS = compose(color).propNames!;
const FLEXTEXT_PROPS = compose(flexbox).propNames!;
const LAYOUT_PROPS = compose(layout).propNames!;
const OVERFLOW_PROPS = compose(overflow).propNames!;
const POSITION_PROPS = compose(position).propNames!;
const SHADOW_PROPS = compose(shadow).propNames!;
const SPACE_PROPS = compose(space).propNames!;
const TEXT_PROPS = compose(typography).propNames!;
const REAL_SYSTEM_PROPS = compose(realSystemProps).propNames!;

const TEXT_STYLE_PROPS = composeTextStyleProps().propNames!;

export {
  COLOR_PROPS,
  FLEXTEXT_PROPS,
  LAYOUT_PROPS,
  OVERFLOW_PROPS,
  POSITION_PROPS,
  REAL_SYSTEM_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TEXT_PROPS,
  TEXT_STYLE_PROPS,
};
