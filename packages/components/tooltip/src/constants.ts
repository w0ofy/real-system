import type { UseTransitionProps } from '@real-system/animation-library';

const TRANSITIONS_CONFIG = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  config: { mass: 1, tension: 500, friction: 40 },
} satisfies UseTransitionProps;

export { TRANSITIONS_CONFIG };
