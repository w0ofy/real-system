import { useState } from 'react';
import { useFocusWithin, useHover, usePress } from '@react-aria/interactions';

type UseInteractionsParams = {
  isDisabled?: boolean;
};

/**
 * A hook that exposes props and flags for `focusWithin` `hover` and `press` interaction states.
 */
const useInteractions = ({ isDisabled }: UseInteractionsParams) => {
  const [isFocusedWithin, setFocusedWithin] = useState(false);

  const { focusWithinProps } = useFocusWithin({
    isDisabled: isDisabled,
    onFocusWithinChange: (isFocusedWithin) => setFocusedWithin(isFocusedWithin),
  });
  const { pressProps, isPressed } = usePress({
    isDisabled: isDisabled,
  });
  const { hoverProps, isHovered } = useHover({ isDisabled: isDisabled });

  return {
    hoverProps,
    isHovered,
    isFocusedWithin,
    setFocusedWithin,
    focusWithinProps,
    pressProps,
    isPressed,
  };
};

type UseInteractionsReturnValue = ReturnType<typeof useInteractions>;

export type { UseInteractionsParams, UseInteractionsReturnValue };
export { useInteractions };
