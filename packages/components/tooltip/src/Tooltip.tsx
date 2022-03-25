import React, { cloneElement, forwardRef, useMemo, useRef } from 'react';

import { useTransition } from '@real-system/animation-library';
import { animated } from '@real-system/animation-library';
import {
  AriakitTooltip,
  AriakitTooltipAnchor,
  AriakitTooltipArrow,
  useAriakitTooltipState,
} from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import styled from '@real-system/styling-library';
import { getToken } from '@real-system/theme-library';
import { Text } from '@real-system/typography';
import {
  isReactText,
  makeTestId,
  useMergedRef,
} from '@real-system/utils-library';

import { TRANSITIONS_CONFIG } from './constants';
import type { TooltipProps } from './types';

const StyledTooltip = styled(animated(Box))`
  z-index: ${getToken('tooltip', 'zIndices')};
  pointer-events: none;
  padding: ${getToken(4, 'space')};
  padding-top: ${getToken(3, 'space')};
  padding-bottom: ${getToken(3, 'space')};
  box-shadow: ${getToken('tooltip', 'shadows')};
  background-color: ${getToken('black')};
  border: ${getToken('border-1', 'borders')};
  border-radius: ${getToken(4, 'radii')};
  max-width: 30rem;
`;

const Tooltip = forwardRef<HTMLElement, TooltipProps>(function Tooltip(
  {
    label,
    children,
    placement,
    disabled,
    visible,
    hideArrow = false,
    gutter = 2,
    ...restProps
  },
  ref
) {
  const internalRef = useRef<HTMLElement>(null);
  const mergedRef = useMergedRef<HTMLElement>(ref, internalRef);

  const state = useAriakitTooltipState({
    placement,
    visible: !disabled && visible,
    gutter,
    ...restProps,
  });
  const isVisible = useMemo(
    () => !disabled && state.visible,
    [disabled, state.visible]
  );
  const transitions = useTransition(isVisible, TRANSITIONS_CONFIG);

  // create the trigger if children is number, text or element
  const trigger = useMemo(() => {
    if (isReactText(children)) {
      return (
        <AriakitTooltipAnchor as="span" state={state} ref={mergedRef}>
          {children}
        </AriakitTooltipAnchor>
      );
    }
    // casted type because if it is not ReactText it will be ReactElement
    const Child = children as React.ReactElement;
    return (
      <AriakitTooltipAnchor
        as="span"
        state={state}
        ref={mergedRef}
        {...Child.props}>
        {(anchorProps) =>
          cloneElement(children as React.ReactElement, anchorProps)
        }
      </AriakitTooltipAnchor>
    );
  }, [children, state, mergedRef]);

  return (
    <>
      {trigger}
      {transitions(
        (style, item) =>
          item && (
            <AriakitTooltip
              data-testid={makeTestId('tooltip')}
              {...restProps}
              state={state}
              as={StyledTooltip}
              style={style}>
              {hideArrow ? null : <AriakitTooltipArrow state={state} />}
              <Text as="span" color="white">
                {label}
              </Text>
            </AriakitTooltip>
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
