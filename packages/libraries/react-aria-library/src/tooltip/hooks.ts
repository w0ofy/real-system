import {
  useTooltip,
  useTooltipTrigger as useAriaTooltipTrigger,
} from '@react-aria/tooltip';
import { useTooltipTriggerState as useAriaTooltipTriggerState } from '@react-stately/tooltip';

import { AriaTooltipProps, RestoredAriaTooltipProps } from './types';

const restoreProps = (props: AriaTooltipProps): RestoredAriaTooltipProps => {
  const { disabled, ...restProps } = props;

  return {
    isDisabled: disabled,
    ...restProps,
  };
};

const useTooltipTriggerState = (props: AriaTooltipProps) => {
  const restoredProps = restoreProps(props);
  return useAriaTooltipTriggerState(restoredProps);
};

const useTooltipTrigger: typeof useAriaTooltipTrigger = (
  props: AriaTooltipProps,
  state,
  ref
) => {
  const restoredProps = restoreProps(props);
  return useAriaTooltipTrigger(
    restoredProps,
    state,
    ref as React.RefObject<HTMLElement>
  );
};

export { useTooltip, useTooltipTrigger, useTooltipTriggerState };
