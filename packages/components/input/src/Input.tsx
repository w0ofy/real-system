import React, { forwardRef } from 'react';

import { InputBox, InputBoxTypes } from './InputBox';
import { InputElement } from './InputElement';
import { InputProps } from './types';
import { safelySpreadInputProps } from './utils';

type TypeProps = {
  type: InputBoxTypes;
  inputmode?: string;
  pattern?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type = 'text',
    readOnly,
    disabled,
    error,
    suffix,
    prefix,
    placeholder,
    id,
    value,
    required,
    name,
    ...restProps
  },
  ref
) {
  const typeProps: TypeProps = { type };

  if (type === 'number') {
    typeProps.type = 'text';
    typeProps.inputmode = 'numeric';
    typeProps.pattern = '[0-9]*';
  }

  return (
    <InputBox
      disabled={disabled}
      error={error}
      suffix={suffix}
      prefix={prefix}
      readOnly={readOnly}
      type={type}>
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
        {...safelySpreadInputProps(restProps)}
        {...typeProps}
      />
    </InputBox>
  );
});

export { Input };
export type { InputProps };
