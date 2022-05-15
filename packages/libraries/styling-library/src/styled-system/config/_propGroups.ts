import { animationProps } from './animation';
import { backgroundProps } from './background';
import { borderProps } from './border';
import { colorProps } from './color';
import { effectProps } from './effect';
import { interactivityProps } from './interactivity';
import { layoutProps } from './layout';
import { miscellaneousProps } from './miscellaneous';
import { spaceProps } from './space';
import { transformProps } from './transform';
import { typographyProps } from './typography';

const mapProps = <T>(props: T) => {
  return Object.keys(props).reduce(
    (a, b) => ({
      ...a,
      [b]: b,
    }),
    {}
  ) as Record<keyof T, keyof T>;
};

const SpaceProps = mapProps(spaceProps);
const AnimationProps = mapProps(animationProps);
const BackgroundProps = mapProps(backgroundProps);
const BorderProps = mapProps(borderProps);
const ColorProps = mapProps(colorProps);
const EffectProps = mapProps(effectProps);
const InteractivityProps = mapProps(interactivityProps);
const LayoutProps = mapProps(layoutProps);
const MiscellaneousProps = mapProps(miscellaneousProps);
const TransformProps = mapProps(transformProps);
const TypographyProps = mapProps(typographyProps);

const STYLE_PROP_GROUPS = {
  AnimationProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  InteractivityProps,
  LayoutProps,
  MiscellaneousProps,
  SpaceProps,
  TransformProps,
  TypographyProps,
};

type StylePropGroupNames = keyof typeof STYLE_PROP_GROUPS;

export type { StylePropGroupNames };
export { STYLE_PROP_GROUPS };
