import React, { forwardRef, useRef } from 'react';

import {
  Aria_AriaCheckboxGroupItemProps,
  useCheckbox,
  useToggleState,
} from '@real-system/react-aria';
import { useMergedRef } from '@real-system/utils';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useCheckboxGroupContext } from './CheckboxContext';
import { CheckboxGroupItem } from './CheckboxGroupItem';
import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import { useInteractions } from './utils';

type CheckboxProps = Aria_AriaCheckboxGroupItemProps;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const interactionProps = useInteractions(props);
  const state = useToggleState(props);
  const groupState = useCheckboxGroupContext();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const { inputProps } = useCheckbox(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  if (groupState.value) {
    return <CheckboxGroupItem ref={mergedRef} {...props} />;
  }

  const { isSelected } = state;
  const { disabled } = inputProps;
  return (
    <CheckboxWrapper disabled={disabled} {...interactionProps}>
      <VisuallyHidden>
        <input {...inputProps} ref={mergedRef} />
      </VisuallyHidden>
      <CheckboxControl
        disabled={disabled}
        isSelected={isSelected}
        {...interactionProps}
      />
      <CheckboxLabel disabled={disabled}>{props.children}</CheckboxLabel>
    </CheckboxWrapper>
  );
});

export type { CheckboxProps };
export { Checkbox };
