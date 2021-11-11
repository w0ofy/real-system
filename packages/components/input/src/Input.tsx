import React, { forwardRef } from 'react';

import { InputBox, InputBoxTypes } from './InputBox';
import { InputElement } from './InputElement';
import { InputProps } from './types';

export type TypeProps = {
  type: InputBoxTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type,
    readOnly,
    disabled,
    error,
    insertAfter,
    insertBefore,
    placeholder,
    id,
    value,
    required,
    name,
    ...restProps
  },
  ref
) {
  const typeProps: TypeProps = { type: type };

  if (type === 'number') {
    typeProps.type = 'text';
    typeProps.inputmode = 'numeric';
    typeProps.pattern = '[0-9]*';
  }

  return (
    <InputBox
      disabled={disabled}
      error={error}
      insertAfter={insertAfter}
      insertBefore={insertBefore}
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
        {...restProps}
        {...typeProps}
      />
    </InputBox>
  );
});

export { Input };
