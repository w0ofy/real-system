import React, { forwardRef, useRef } from 'react';

import {
  Aria_AriaCheckboxGroupItemProps,
  useCheckboxGroupItem,
} from '@real-system/react-aria';
import { Label, Typography } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils';

import { useCheckboxGroupContext } from './CheckboxContext';

type CheckboxGroupItemProps = Aria_AriaCheckboxGroupItemProps;

const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  function CheckboxGroupItem(props, ref) {
    const state = useCheckboxGroupContext();
    const internalRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(internalRef, ref);
    const { inputProps } = useCheckboxGroupItem(
      props,
      state,
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

export type { CheckboxGroupItemProps };
export { CheckboxGroupItem };
