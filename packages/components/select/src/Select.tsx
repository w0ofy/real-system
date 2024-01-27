import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import { SelectProviderPrimitive } from '@real-system/select-primitive';
import {
  SelectLabelPrimitive,
  SelectPrimitive,
} from '@real-system/select-primitive';
import { spreadStyleProps } from '@real-system/styled-library';
import { Text } from '@real-system/typography';

import { selectStyles } from './Select.style';
import { SelectGroup } from './SelectGroup';
import { SelectItem } from './SelectItem';
import { SelectPopover } from './SelectPopover';
import type { SelectProps } from './types';

export interface SelectComponent
  extends React.ForwardRefExoticComponent<SelectProps> {
  Item: typeof SelectItem;
  Group: typeof SelectGroup;
}

/**
 * @summary Custom input to select a value from a list of options presented in a dropdown menu
 * @todo Make a permanent fix for patch to ariakit ""`undefined` middleware when arrow is not used" bug
 */
// @ts-expect-error Select component properties are defined on the fn object after this is defined
const Select: SelectComponent = forwardRef<HTMLButtonElement, SelectProps>(
  function Select(
    {
      children,
      hasError = false,
      label,
      disabled,
      required,
      /** select-api props */
      placement = 'bottom-start',
      /** alias for `setValue` */
      onChange,
      value,
      defaultValue,
      open,
      setOpen,
      ...restProps
    },
    ref
  ) {
    const styles = hasError ? selectStyles['danger'] : selectStyles['default'];

    return (
      <real.div
        display="flex"
        flexDirection="column"
        width="100%"
        gap={2}
        {...spreadStyleProps(restProps)}>
        <SelectProviderPrimitive
          placement={placement}
          setValue={onChange}
          setOpen={setOpen}
          value={value}
          defaultValue={defaultValue}
          open={open}>
          <SelectLabelPrimitive
            render={
              <Text.Label as="span" required={required} disabled={disabled} />
            }>
            {label}
          </SelectLabelPrimitive>
          <SelectPrimitive
            render={<real.button {...styles} />}
            disabled={disabled}
            ref={ref}
          />
          <SelectPopover>{children as React.ReactNode}</SelectPopover>
        </SelectProviderPrimitive>
      </real.div>
    );
  }
);

Select.Item = SelectItem;
Select.Group = SelectGroup;

export type { SelectProps };
export { Select };
