import { useState } from 'react';

import {
  Aria_AriaCheckboxGroupItemProps,
  useFocusWithin,
  useHover,
  usePress,
} from '@real-system/react-aria';

import { useCheckboxGroupContext } from './CheckboxContext';

const useInteractions = ({ isDisabled }: Aria_AriaCheckboxGroupItemProps) => {
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

const useIsCheckboxGroup = () => {
  try {
    const groupState = useCheckboxGroupContext();
    if (groupState.value) return true;
    return false;
  } catch (_) {
    return false;
  }
};

export type { UseInteractionsReturnValue };
export { useInteractions, useIsCheckboxGroup };
