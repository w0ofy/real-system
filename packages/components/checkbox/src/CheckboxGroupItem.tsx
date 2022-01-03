import React, { forwardRef, useRef } from 'react';

import { useCheckboxGroupItem } from '@real-system/react-aria';
import { HelpText } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils';
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

    const disabled =
      state.isDisabled ||
      props.isDisabled ||
      state.isReadOnly ||
      props.isReadOnly;
    const isSelected = state.isSelected(props.value);
    const { children, helpText } = props;
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
        <CheckboxLabel disabled={disabled}>{children}</CheckboxLabel>
        {helpText && <HelpText>{helpText}</HelpText>}
      </CheckboxWrapper>
    );
  }
);

export type { CheckboxGroupItemProps };
export { CheckboxGroupItem };
