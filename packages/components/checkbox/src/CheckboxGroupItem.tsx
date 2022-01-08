import React, { forwardRef, useRef } from 'react';

import { useCheckboxGroupItem } from '@real-system/react-aria-library';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useCheckboxGroupContext } from './CheckboxContext';
import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import { CheckboxGroupItemProps } from './types';
import { restoreCheckboxGroupItemProps, useInteractions } from './utils';

const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  function CheckboxGroupItem(passedProps, ref) {
    const props = restoreCheckboxGroupItemProps(passedProps);

    const interactionProps = useInteractions(props);
    const state = useCheckboxGroupContext();
    const internalRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(internalRef, ref);
    const { inputProps } = useCheckboxGroupItem(
      props,
      state,
      mergedRef as React.RefObject<HTMLInputElement>
    );
    const { children, helpText, value } = props;

    const disabled =
      state.isDisabled ||
      props.isDisabled ||
      state.isReadOnly ||
      props.isReadOnly;
    const isSelected = state.isSelected(value);

    return (
      <CheckboxWrapper
        disabled={disabled}
        helpText={helpText}
        _first={{ ml: 4 }}
        _notFirst={{ ml: state.canSelectAll ? 7 : 4 }}
        {...interactionProps}>
        <VisuallyHidden as="div">
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <CheckboxControl
          disabled={disabled}
          isSelected={isSelected}
          indeterminate={props.isIndeterminate}
          errorText={state.errorText}
          {...interactionProps}
        />
        <CheckboxLabel disabled={disabled}>{children}</CheckboxLabel>
      </CheckboxWrapper>
    );
  }
);

export type { CheckboxGroupItemProps };
export { CheckboxGroupItem };
