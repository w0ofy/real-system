import { useState } from 'react';

import {
  Aria_AriaCheckboxGroupItemProps,
  useFocusWithin,
  useHover,
  usePress,
} from '@real-system/react-aria';

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

export type { UseInteractionsReturnValue };
export { useInteractions };
