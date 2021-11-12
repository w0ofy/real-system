import * as React from 'react';

import { Box } from '@real-system/box';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useDelay } from './hooks';
import { styles, Wheel } from './styles';
import { SpinnerProps } from './types';

/**
 * @todo refactor to use an icon wrapper w/ a11y in mind
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  {
    size = 'md',
    title = 'Loading',
    as = 'span',
    display = 'flex',
    color = 'color-text',
    delay = 250,
    ...restProps
  },
  ref
) {
  const sizeStyles = styles[size];
  const visible = useDelay(delay);
  return (
    <Box
      as={as}
      display={display}
      size={sizeStyles.size}
      ref={ref}
      {...restProps}>
      <Wheel
        display="block"
        borderStyle="solid"
        borderColor="color-border-neutral-weak-8"
        borderRadius="border-radius-circle"
        borderTopColor={color}
        size={sizeStyles.size}
        borderWidth={sizeStyles.borderWidth}
        opacity={visible ? 1 : 0}
      />
      <VisuallyHidden>{title}</VisuallyHidden>
    </Box>
  );
});

export { Spinner };
export type { SpinnerProps };
