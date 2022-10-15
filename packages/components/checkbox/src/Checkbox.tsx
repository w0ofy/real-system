import React, { forwardRef, useRef } from 'react';

import {
  AriaCheckboxProps,
  useCheckbox,
  useInteractions,
  useToggleState,
} from '@real-system/a11y-library';
import { useMergeRefs } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import type { CustomProps } from './Checkbox.model';
import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';

type CheckboxProps = Pick<
  AriaCheckboxProps,
  'required' | 'disabled' | 'indeterminate' | 'children'
> &
  CustomProps;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const interactionProps = useInteractions({ disabled: props.disabled });
  const state = useToggleState(props);
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergeRefs(internalRef, ref);

  const { inputProps } = useCheckbox(
    props as AriaCheckboxProps,
    state,
    mergedRef as unknown as React.RefObject<HTMLInputElement>
  );

  const { hasError, helpText, required, disabled, indeterminate, children } =
    props;

  return (
    <CheckboxWrapper
      disabled={disabled}
      helpText={helpText}
      hasError={hasError}
      {...interactionProps}>
      <VisuallyHidden>
        <input {...inputProps} ref={mergedRef} />
      </VisuallyHidden>
      <CheckboxControl
        disabled={disabled}
        isSelected={state.isSelected}
        indeterminate={indeterminate}
        isInvalid={hasError}
        {...interactionProps}
      />
      <CheckboxLabel disabled={disabled} required={required}>
        {children}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
});

export type { CheckboxProps };
export { Checkbox };
