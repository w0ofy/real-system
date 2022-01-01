import React, { forwardRef, useRef } from 'react';

import {
  Aria_AriaCheckboxGroupItemProps,
  useCheckbox,
  useCheckboxGroupItem,
  useToggleState,
} from '@real-system/react-aria';
import { Label, Typography } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils';

import { useCheckboxGroupContext } from './CheckboxContext';

type CheckboxProps = Aria_AriaCheckboxGroupItemProps;

const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckboxGroupItem(props, ref) {
    const groupState = useCheckboxGroupContext();
    const internalRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(internalRef, ref);
    const { inputProps } = useCheckboxGroupItem(
      props,
      groupState,
      mergedRef as React.RefObject<HTMLInputElement>
    );

    return (
      <Label display="inline-flex">
        <input {...inputProps} ref={mergedRef} />
        <Typography as="span">{props.children}</Typography>
      </Label>
    );
  }
);

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const { children } = props;
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
    return (
      <CheckboxGroupItem ref={mergedRef} {...props}>
        {children}
      </CheckboxGroupItem>
    );
  }

  return (
    <Label display="inline-flex">
      <input {...inputProps} ref={mergedRef} />
      <Typography as="span">{children}</Typography>
    </Label>
  );
});

export type { CheckboxProps };
export { Checkbox };
