import type { AnimatedProps, UseTransitionProps } from 'react-spring';
import { animated, config, useTransition } from 'react-spring';

/** library tools */
export type { AnimatedProps, UseTransitionProps };
export { animated, config, useTransition };

/** maintained by us */
export * from './useReducedMotion';
