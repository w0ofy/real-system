/**
 * @todo figure out safe way to pass style props
 */
import React, { forwardRef } from 'react';

import { useField } from '@real-system/field';

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
    // field props
    readonly: readonlyProp,
    disabled: disabledProp,
    id: idProp,
    required: requiredProp,
    invalid: invalidProp,
    // input props
    type = 'text',
    suffix,
    prefix,
    placeholder,
    value,
    name,
    ...restProps
  },
  ref
) {
  const {
    invalid: { status: error },
    required,
    disabled,
    readonly,
    id,
  } = useField({
    invalid: invalidProp,
    required: requiredProp,
    disabled: disabledProp,
    readonly: readonlyProp,
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
      readonly={readonly}
      type={type}
      {...restProps}>
      <InputElement
        aria-invalid={error}
        aria-readonly={readonly}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        readonly={readonly}
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
