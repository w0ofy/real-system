import React, { forwardRef, useRef } from 'react';

import {
  AriaCheckboxProps,
  useCheckbox,
  useInteractions,
  useToggleState,
} from '@real-system/a11y-library';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import type { CustomProps } from './Checkbox.model';
import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';

type CheckboxProps = AriaCheckboxProps & CustomProps;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const interactionProps = useInteractions({ disabled: props.disabled });
  const state = useToggleState(props);
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const { inputProps } = useCheckbox(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  const { validation, helpText } = props;
  const disabled = props.disabled || props.readonly;

  return (
    <CheckboxWrapper
      disabled={disabled}
      helpText={helpText}
      invalid={validation}
      {...interactionProps}>
      <VisuallyHidden as="div">
        <input {...inputProps} ref={mergedRef} />
      </VisuallyHidden>
      <CheckboxControl
        disabled={disabled}
        isSelected={state.isSelected}
        indeterminate={props.indeterminate}
        isInvalid={validation?.hasError}
        {...interactionProps}
      />
      <CheckboxLabel disabled={disabled} required={props.required}>
        {props.children}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
});

export type { CheckboxProps };
export { Checkbox };
