import React, { forwardRef, useRef } from 'react';

import {
  Aria_AriaCheckboxGroupItemProps,
  useCheckboxGroupItem,
} from '@real-system/react-aria';
import { useMergedRef } from '@real-system/utils';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useCheckboxGroupContext } from './CheckboxContext';
import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import { useInteractions } from './utils';

type CheckboxGroupItemProps = Aria_AriaCheckboxGroupItemProps;

const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  function CheckboxGroupItem(props, ref) {
    const interactionProps = useInteractions(props);
    const state = useCheckboxGroupContext();
    const internalRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(internalRef, ref);
    const { inputProps } = useCheckboxGroupItem(
      props,
      state,
      mergedRef as React.RefObject<HTMLInputElement>
    );

    const disabled = state.isDisabled || props.isDisabled;
    const isSelected = state.isSelected(props.value);

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
  }
);

export type { CheckboxGroupItemProps };
export { CheckboxGroupItem };
