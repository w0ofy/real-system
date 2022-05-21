import { Property as CSS } from 'csstype';

import type { StylePropConfig, Token } from './_types';

const animationProps: StylePropConfig<AnimationProps> = {
  animation: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: true,
  animationFillMode: true,
  animationIterationCount: true,
  animationName: true,
  animationPlayState: true,
  animationTimingFunction: true,
  transition: true,
  transitionDelay: true,
  transitionDuration: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  userSelect: true,
  willChange: true,
};

type AnimationProps = {
  /**
   * The CSS `animation` property
   */
  animation?: Token<CSS.Animation>;
  /**
   * The CSS `animationDelay` property
   */
  animationDelay?: Token<CSS.AnimationDelay>;
  /**
   * The CSS `animationDirection` property
   */
  animationDirection?: Token<CSS.AnimationDirection>;
  /**
   * The CSS `animationDuration` property
   */
  animationDuration?: Token<CSS.AnimationDuration>;
  /**
   * The CSS `animationFillMode` property
   */
  animationFillMode?: Token<CSS.AnimationFillMode>;
  /**
   * The CSS `animationIterationCount` property
   */
  animationIterationCount?: Token<CSS.AnimationIterationCount>;
  /**
   * The CSS `animationName` property
   */
  animationName?: Token<CSS.AnimationName>;
  /**
   * The CSS `animationPlayState` property
   */
  animationPlayState?: Token<CSS.AnimationPlayState>;
  /**
   * The CSS `animationTimingFunction` property
   */
  animationTimingFunction?: Token<CSS.AnimationTimingFunction>;
  /**
   * The CSS `transition` property
   */
  transition?: Token<CSS.Transition>;
  /**
   * The CSS `transition-delay` property
   */
  transitionDelay?: Token<CSS.TransitionDelay>;
  /**
   * The CSS `transition-duration` property
   */
  transitionDuration?: Token<string>;

  /**
   * The CSS `transition-property` property
   */
  transitionProperty?: Token<CSS.TransitionProperty>;
  /**
   * The CSS `transition-timing-function` property
   */
  transitionTimingFunction?: Token<CSS.TransitionTimingFunction>;
  /**
   * The CSS `userSelect` property
   */
  userSelect?: Token<CSS.UserSelect>;
  /**
   * The CSS `will-change` property
   */
  willChange?: Token<CSS.WillChange>;
};

export type { AnimationProps };
export { animationProps };
