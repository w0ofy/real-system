import React, { useMemo } from 'react';

import { useTransition } from '@real-system/animation-library';
import {
  Placement,
  useHover,
  UseHoverOptions,
  useLayer,
} from '@real-system/react-laag-library';
import { useToken } from '@real-system/theme-library';
import { Typography } from '@real-system/typography';
import { isReactText } from '@real-system/utils-library';

import { TooltipArrow, TooltipPopup } from './components';
import { BG_COLOR, TRANSITIONS_CONFIG } from './constants';

type TooltipProps = {
  children: React.ReactElement;
  label: string;
  ariaLabel?: string;
  placement?: Placement;
  disabled?: boolean;
} & Omit<UseHoverOptions, 'hideOnScroll'>;

const Tooltip = ({
  children,
  label,
  ariaLabel = label,
  placement = 'top-center',
  disabled = false,
  delayEnter = 50,
  delayLeave = 200,
}: TooltipProps) => {
  const [isHovered, hoverProps] = useHover({
    delayEnter,
    delayLeave,
  });
  const isVisible = useMemo(
    () => isHovered && !disabled,
    [isHovered, disabled]
  );

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    placement,
    isOpen: isVisible,
    overflowContainer: false,
    auto: true,
    triggerOffset: 8,
  });
  const transitions = useTransition(isVisible, TRANSITIONS_CONFIG);

  const trigger = useMemo(() => {
    if (isReactText(trigger)) {
      return (
        <span {...triggerProps} {...hoverProps}>
          {children}
        </span>
      );
    }
    return React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    });
  }, [children, triggerProps, hoverProps]);

  const arrowColor = useToken(BG_COLOR);

  return (
    <>
      {trigger}
      {transitions(
        (styles, visible) =>
          visible &&
          renderLayer(
            <TooltipPopup
              aria-label={ariaLabel}
              {...layerProps}
              style={{ ...styles, ...layerProps.style }}>
              <Typography as="span" color="color-background-light">
                {label}
              </Typography>
              <TooltipArrow
                {...arrowProps}
                size={8}
                backgroundColor={arrowColor}
                borderColor={arrowColor}
                borderWidth={1}
              />
            </TooltipPopup>
          )
      )}
    </>
  );
};

export { Tooltip };
