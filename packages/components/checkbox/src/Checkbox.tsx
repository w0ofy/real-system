import React, { forwardRef, useRef } from 'react';

import {
  useCheckbox,
  useInteractions,
  useToggleState,
} from '@real-system/react-aria-library';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import { CheckboxProps } from './types';
import { restoreCheckboxProps } from './utils';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  passedProps,
  ref
) {
  const restoredProps = restoreCheckboxProps(passedProps);

  const interactionProps = useInteractions(restoredProps);
  const state = useToggleState({
    ...restoredProps,
    isDisabled: restoredProps.isDisabled,
    isReadOnly: restoredProps.isReadOnly,
  });
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const { inputProps } = useCheckbox(
    restoredProps,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  const { isSelected } = state;
  const { isDisabled, isReadOnly, helpText, children, isRequired, errorText } =
    restoredProps;

  const disabled = isDisabled || isReadOnly;

  return (
    <CheckboxWrapper
      disabled={disabled}
      helpText={helpText}
      errorText={errorText}
      {...interactionProps}>
      <VisuallyHidden as="div">
        <input {...inputProps} ref={mergedRef} />
      </VisuallyHidden>
      <CheckboxControl
        disabled={disabled}
        isSelected={isSelected}
        indeterminate={restoredProps.isIndeterminate}
        errorText={errorText}
        {...interactionProps}
      />
      <CheckboxLabel disabled={disabled} required={isRequired}>
        {children}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
});

export type { CheckboxProps };
export { Checkbox };
