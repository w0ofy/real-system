/**
 * @todo figure out safe way to pass style props
 */
import React, { forwardRef } from 'react';

import { useField } from '@real-system/field';
import { FieldControl } from '@real-system/field';

import { InputBox, InputBoxTypes } from './InputBox';
import { InputElement } from './InputElement';
import { InputProps } from './types';

type InputTypeProps = {
  type: InputBoxTypes;
  inputmode?: string;
  pattern?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type = 'text',
    readOnly: readOnlyProp,
    disabled: disabledProp,
    suffix,
    prefix,
    placeholder,
    id: idProp,
    value,
    required: requiredProp,
    invalid,
    name,
    ...restProps
  },
  ref
) {
  const {
    invalid: { status: error },
    required,
    disabled,
    readOnly,
    id,
  } = useField({
    invalid,
    required: requiredProp,
    disabled: disabledProp,
    readOnly: readOnlyProp,
    id: idProp,
  });

  const inputTypeProps: InputTypeProps = { type };

  if (type === 'number') {
    inputTypeProps.type = 'text';
    inputTypeProps.inputmode = 'numeric';
    inputTypeProps.pattern = '[0-9]*';
  }

  return (
    <InputBox
      disabled={disabled}
      error={error}
      suffix={suffix}
      prefix={prefix}
      readOnly={readOnly}
      type={type}
      {...restProps}>
      <InputElement
        aria-invalid={error}
        aria-readonly={readOnly}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        value={value}
        ref={ref}
        {...restProps}
        {...inputTypeProps}
      />
    </InputBox>
  );
});

export { Input };
export type { InputProps };
