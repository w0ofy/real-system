import * as React from 'react';

import { useInteractions } from '@real-system/a11y-library';
import type { CheckboxPrimitiveProps } from '@real-system/checkbox-primitive';
import {
  CheckboxPrimitive,
  useCheckboxStatePrimitive,
} from '@real-system/checkbox-primitive';
import { real } from '@real-system/elements-primitive';
import type { FieldControlProps } from '@real-system/field';
import type { RealSystemChildrenProp } from '@real-system/styled-library';
import { Text } from '@real-system/typography';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useCheckboxGroupContext } from './Checkbox.context';
import { PossibleCheckboxValues, SetCheckboxValue } from './Checkbox.model';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupLabel } from './CheckboxGroupLabel';
import { CheckboxTree } from './CheckboxTree';
import { CheckboxControl, CheckboxLabel } from './components';

type CheckboxProps = Pick<
  CheckboxPrimitiveProps,
  'checked' | 'value' | 'disabled'
> & {
  indeterminate?: boolean;
  onChange?: SetCheckboxValue;
  value?: PossibleCheckboxValues;
  required?: boolean;
  helperText?: string;
} & RealSystemChildrenProp &
  FieldControlProps;

interface CheckboxComponent
  extends React.ForwardRefExoticComponent<CheckboxProps> {
  Group: typeof CheckboxGroup;
  GroupLabel: typeof CheckboxGroupLabel;
  Tree: typeof CheckboxTree;
}

// @ts-expect-error Checkbox component properties are defined on the fn object after this is defined
const Checkbox: CheckboxComponent = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox(
  {
    children,
    disabled,
    required,
    value: valueProp,
    indeterminate,
    onChange,
    checked: checkedProp,
    helperText,
  },
  ref
) {
  const { interactionProps, ...restInteractionProps } = useInteractions({
    disabled,
  });
  const { group, items } = useCheckboxGroupContext() || {};
  const local = useCheckboxStatePrimitive({
    setValue: onChange,
    value: valueProp ? [valueProp] : undefined,
  });

  const state = React.useMemo(() => {
    let state: any = local;

    if (group && items) {
      state = indeterminate ? group : items;
    }
    return state;
  }, [local, group, items, indeterminate]);

  const checked = React.useMemo(() => {
    const value = state.value;

    if (checkedProp !== undefined) {
      return checkedProp;
    }

    if (Array.isArray(value)) {
      return value.includes(valueProp as string);
    }

    return value;
  }, [checkedProp, state.value, valueProp]);

  return (
    <real.span data-real-system="checkbox">
      <real.label
        display="inline-flex"
        alignItems="center"
        cursor="pointer"
        {...interactionProps.hoverProps}
        {...interactionProps.pressProps}
        {...interactionProps.focusWithinProps}>
        <>
          <VisuallyHidden>
            <CheckboxPrimitive
              state={state}
              value={valueProp}
              checked={checked}
              ref={ref}
            />
          </VisuallyHidden>
          <CheckboxControl {...restInteractionProps} checked={checked} />
          <CheckboxLabel disabled={disabled} required={required}>
            {children}
          </CheckboxLabel>
        </>
      </real.label>
      {helperText && <Text.HelperText ml={15}>{helperText}</Text.HelperText>}
    </real.span>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.GroupLabel = CheckboxGroupLabel;
Checkbox.Tree = CheckboxTree;

export { Checkbox };
