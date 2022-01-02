import React, { forwardRef, useRef, useState } from 'react';

import { Box } from '@real-system/box';
import { Icon } from '@real-system/icon';
import {
  Aria_AriaCheckboxGroupItemProps,
  useCheckbox,
  useFocusWithin,
  useHover,
  usePress,
  useToggleState,
} from '@real-system/react-aria';
import { Label, Typography } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useCheckboxGroupContext } from './CheckboxContext';
import { CheckboxGroupItem } from './CheckboxGroupItem';

type CheckboxProps = Aria_AriaCheckboxGroupItemProps;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const [isFocusedWithin, setFocusedWithin] = useState(false);
  const state = useToggleState(props);
  const groupState = useCheckboxGroupContext();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);
  const { focusWithinProps } = useFocusWithin({
    isDisabled: props.isDisabled,
    onFocusWithinChange: (isFocusedWithin) => setFocusedWithin(isFocusedWithin),
  });
  const { pressProps, isPressed } = usePress({
    isDisabled: props.isDisabled,
  });
  const { hoverProps, isHovered } = useHover({ isDisabled: props.isDisabled });
  const { inputProps } = useCheckbox(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  if (groupState.value) {
    return <CheckboxGroupItem ref={mergedRef} {...props} />;
  }

  const { isSelected } = state;
  return (
    <Label
      display="inline-flex"
      disabled={inputProps.disabled}
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <Box as="span" display="flex" alignItems="center" justifyContent="center">
        <VisuallyHidden>
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <Box
          as="span"
          width={8}
          height={8}
          margin={2}
          borderStyle="solid"
          borderWidth={1}
          backgroundColor={
            inputProps.disabled
              ? 'color-background-disabled-weak-5'
              : isSelected
              ? isHovered
                ? 'color-background-brand-strong-3'
                : 'color-background-brand'
              : 'color-background-brand-inverse'
          }
          borderColor={
            isSelected
              ? 'color-border-brand'
              : isHovered
              ? 'color-border-neutral-strong-5'
              : 'color-border-neutral-weak-2'
          }
          borderRadius={2}
          transition="box-shadow 150ms ease-in, background-color 150ms ease-in, border-color 100ms ease-in"
          boxShadow={!isPressed && isFocusedWithin ? 'shadow-focus' : 'none'}>
          <Icon
            icon="check"
            size="xs"
            solid
            color={
              isSelected ? 'color-background-brand-inverse' : 'transparent'
            }
          />
        </Box>
        <Typography as="span" mb={0}>
          {props.children}
        </Typography>
      </Box>
    </Label>
  );
});

export type { CheckboxProps };
export { Checkbox };
