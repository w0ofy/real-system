/**
 * @todo figure out safe way to pass style props
 */
import React, { forwardRef } from 'react';

import type { InputProps } from './Input.model';
import { InputBox, InputBoxTypes } from './InputBox';
import { InputElement } from './InputElement';

type InputTypeProps = {
  type: InputBoxTypes;
  inputmode?: string;
  pattern?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    // field props
    readonly,
    disabled,
    id,
    required,
    hasError,
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
  const inputTypeProps: InputTypeProps = { type };

  if (type === 'number') {
    inputTypeProps.type = 'text';
    inputTypeProps.inputmode = 'numeric';
    inputTypeProps.pattern = '[0-9]*';
  }

  return (
    <InputBox
      disabled={disabled}
      hasError={hasError}
      suffix={suffix}
      prefix={prefix}
      readonly={readonly}
      type={type}
      {...restProps}>
      <InputElement
        aria-invalid={hasError}
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
