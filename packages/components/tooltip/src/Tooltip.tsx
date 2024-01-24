import React, { forwardRef, useMemo } from 'react';

import { animated, useTransition } from '@real-system/animation-library';
import styled from '@real-system/styled-library';
import {
  TooltipArrowPrimitive,
  TooltipPrimitive,
  TooltipProviderPrimitive,
  useTooltipStorePrimitive,
} from '@real-system/tooltip-primitive';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { TRANSITIONS_CONFIG } from './constants';
import { TooltipAnchor } from './TooltipAnchor';
import type { TooltipProps } from './types';

const StyledTooltip = styled(animated('div'))({
  zIndex: 'tooltip',
  pointerEvents: 'none',
  padding: 4,
  py: 3,
  boxShadow: 'tooltip',
  backgroundColor: 'black',
  border: 'border-1',
  borderRadius: 4,
  maxWidth: '30rem',
});

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  {
    label,
    children,
    placement = 'top',
    disabled,
    open,
    gutter = 0,
    hideArrow = false,
    showTimeout = 0,
    hideTimeout = 250,
    skipTimeout = 3000,
    wrapperElement = 'span',
    ...restProps
  },
  ref
) {
  const store = useTooltipStorePrimitive({
    placement,
    open: !disabled && open,
    skipTimeout,
    hideTimeout,
    showTimeout,
  });
  const mounted = store.useState('mounted');
  const isMounted = useMemo(() => !disabled && mounted, [disabled, mounted]);
  const transitions = useTransition<boolean, typeof TRANSITIONS_CONFIG>(
    isMounted,
    TRANSITIONS_CONFIG
  );

  return (
    <TooltipProviderPrimitive store={store}>
      <TooltipAnchor wrapperElement={wrapperElement} ref={ref}>
        {children}
      </TooltipAnchor>
      {transitions(
        (style, item) =>
          item && (
            <TooltipPrimitive
              data-testid={makeTestId('tooltip')}
              render={<StyledTooltip style={style} />}
              alwaysVisible
              gutter={gutter}
              {...restProps}>
              <TooltipArrowPrimitive size={hideArrow ? 0 : 30} />
              <Text as="span" color="white">
                {label}
              </Text>
            </TooltipPrimitive>
          )
      )}
    </TooltipProviderPrimitive>
  );
});

Tooltip.defaultProps = {
  gutter: 0,
  showTimeout: 0,
  hideTimeout: 250,
  skipTimeout: 300,
  placement: 'top',
  'data-testid': 'tooltip',
};

export type { TooltipProps };
export { Tooltip };
