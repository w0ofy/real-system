import React, { cloneElement, forwardRef, useMemo, useRef } from 'react';

import { animated, useTransition } from '@real-system/animation-library';
import styled from '@real-system/styled-library';
import {
  TooltipAnchorPrimitive,
  TooltipArrowPrimitive,
  TooltipPrimitive,
  useTooltipStorePrimitive,
} from '@real-system/tooltip-primitive';
import { Text } from '@real-system/typography';
import {
  isReactText,
  makeTestId,
  useMergeRefs,
} from '@real-system/utils-library';

import { TRANSITIONS_CONFIG } from './constants';
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

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  {
    label,
    children,
    placement,
    disabled,
    open,
    hideArrow = false,
    ...restProps
  },
  ref
) {
  const internalRef = useRef<HTMLSpanElement>(null);
  const mergedRef = useMergeRefs(ref, internalRef);

  const store = useTooltipStorePrimitive({
    placement,
    open: !disabled && open,
    ...restProps,
  });
  const { open: openState } = store.getState();
  const isOpen = useMemo(() => !disabled && openState, [disabled, openState]);
  const transitions = useTransition(isOpen, TRANSITIONS_CONFIG);

  // create the trigger if children is number, text or element
  const trigger = useMemo(() => {
    if (isReactText(children)) {
      return (
        <TooltipAnchorPrimitive as="span" store={store} ref={mergedRef}>
          {children}
        </TooltipAnchorPrimitive>
      );
    }
    // casted type because if it is not ReactText it will be ReactElement
    const Child = children as React.ReactElement;
    return (
      <TooltipAnchorPrimitive
        as="span"
        store={store}
        ref={mergedRef}
        {...Child.props}>
        {(anchorProps) =>
          cloneElement(children as React.ReactElement, anchorProps)
        }
      </TooltipAnchorPrimitive>
    );
  }, [children, store, mergedRef]);

  return (
    <>
      {trigger}
      {transitions(
        (style, item) =>
          item && (
            <TooltipPrimitive
              data-testid={makeTestId('tooltip')}
              {...restProps}
              store={store}
              as={StyledTooltip}
              style={style}>
              {hideArrow ? null : <TooltipArrowPrimitive store={store} />}
              <Text as="span" color="white">
                {label}
              </Text>
            </TooltipPrimitive>
          )
      )}
    </>
  );
});

Tooltip.defaultProps = {
  placement: 'top',
  'data-testid': 'tooltip',
};

export type { TooltipProps };
export { Tooltip };
