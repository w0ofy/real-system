import * as React from 'react';

import { real } from '@real-system/elements-primitive';

import { RequiredDot } from './RequiredDot';

type CheckboxLabelProps = {
  children: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
};

const CheckboxLabel = ({
  children,
  disabled,
  required,
}: CheckboxLabelProps) => {
  return (
    <>
      {required && <RequiredDot disabled={disabled} />}
      <real.span
        color={disabled ? 'gray-300' : 'gray-500'}
        fontFamily="body"
        fontScale="input"
        fontWeight="input"
        marginBottom={0}>
        {children}
      </real.span>
    </>
  );
};

export { CheckboxLabel };
