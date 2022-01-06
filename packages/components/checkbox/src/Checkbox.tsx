import React, { forwardRef, useRef } from 'react';

import { useCheckbox, useToggleState } from '@real-system/react-aria';
import { useMergedRef } from '@real-system/utils';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import { CheckboxProps } from './types';
import { restoreCheckboxProps, useInteractions } from './utils';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  passedProps,
  ref
) {
  const props = restoreCheckboxProps(passedProps);

  const interactionProps = useInteractions(props);
  const state = useToggleState({
    ...props,
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
  });
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const { inputProps } = useCheckbox(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  const { isSelected } = state;
  const { isDisabled, isReadOnly, helpText, children } = props;

  const disabled = isDisabled || isReadOnly;

  return (
    <CheckboxWrapper
      disabled={disabled}
      helpText={helpText}
      {...interactionProps}>
      <VisuallyHidden as="div">
        <input {...inputProps} ref={mergedRef} />
      </VisuallyHidden>
      <CheckboxControl
        disabled={disabled}
        isSelected={isSelected}
        indeterminate={props.isIndeterminate}
        {...interactionProps}
      />
      <CheckboxLabel disabled={disabled}>{children}</CheckboxLabel>
    </CheckboxWrapper>
  );
});

export type { CheckboxProps };
export { Checkbox };
