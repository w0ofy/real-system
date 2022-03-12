import React, { forwardRef, useMemo, useRef } from 'react';

import {
  useCheckboxGroupItem,
  useInteractions,
} from '@real-system/a11y-library';
import type { FlexProps } from '@real-system/flex';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useCheckboxGroupContext } from './CheckboxContext';
import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import { CheckboxGroupItemProps } from './types';

const canSelectAllStyles = {
  _first: {
    paddingY: 2,
    paddingX: 3,
    borderRadius: 1,
    backgroundColor: 'blue-50',
  },
};

const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  function CheckboxGroupItem(props, ref) {
    const { children, helpText, value, disabled: isDisabled } = props;

    const interactionProps = useInteractions({ isDisabled });
    const state = useCheckboxGroupContext();
    const internalRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(internalRef, ref);
    const { inputProps } = useCheckboxGroupItem(
      props,
      state,
      mergedRef as React.RefObject<HTMLInputElement>
    );
    const disabled =
      state.isDisabled || props.disabled || state.isReadOnly || props.readonly;
    const isSelected = state.isSelected(value);

    const dynamicStyles = useMemo((): FlexProps => {
      const maybeCanSelectAll = state.canSelectAll ? canSelectAllStyles : {};

      if (state.orientation === 'vertical') {
        return {
          ...maybeCanSelectAll,
          _notLast: { marginBottom: 5 },
          _notFirst: { marginLeft: state.canSelectAll ? 10 : 4 },
        };
      }
      return {
        ...maybeCanSelectAll,
        _notLast: { marginRight: 5 },
      };
    }, [state.orientation, state.canSelectAll]);

    return (
      <CheckboxWrapper
        disabled={disabled}
        helpText={helpText}
        marginLeft={4}
        {...dynamicStyles}
        {...interactionProps}>
        <VisuallyHidden as="div">
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <CheckboxControl
          disabled={disabled}
          isSelected={isSelected}
          indeterminate={props.indeterminate}
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
