import type {
  AnimatedProps,
  UseSpringProps,
  UseTransitionProps,
} from 'react-spring';
import {
  animated,
  config,
  useSpring,
  useSpringRef,
  useTransition,
} from 'react-spring';

/** library tools */
export type { AnimatedProps, UseSpringProps, UseTransitionProps };
export { animated, config, useSpring, useSpringRef, useTransition };

/** maintained by us */
export * from './usePrefersReducedMotion';
