import { useState } from 'react';
import { useFocusWithin, useHover, usePress } from '@react-aria/interactions';

type UseInteractionsParams = {
  disabled?: boolean;
};

/**
 * A hook that exposes props and flags for `focusWithin` `hover` and `press` interaction states.
 */
const useInteractions = ({ disabled }: UseInteractionsParams) => {
  const [isFocusedWithin, setFocusedWithin] = useState(false);

  const { focusWithinProps } = useFocusWithin({
    isDisabled: disabled,
    onFocusWithinChange: (isFocusedWithin) => setFocusedWithin(isFocusedWithin),
  });
  const { pressProps, isPressed } = usePress({
    isDisabled: disabled,
  });
  const { hoverProps, isHovered } = useHover({ isDisabled: disabled });

  return {
    interactionProps: {
      hoverProps,
      focusWithinProps,
      pressProps,
    },
    isHovered,
    isFocusedWithin,
    setFocusedWithin,
    isPressed,
  };
};

type UseInteractionsReturnValue = ReturnType<typeof useInteractions>;

export type { UseInteractionsParams, UseInteractionsReturnValue };
export { useInteractions };
