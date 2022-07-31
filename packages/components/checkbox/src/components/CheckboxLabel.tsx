import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type { RealSystemChildrenProp } from '@real-system/styled-library';

import { RequiredDot } from './RequiredDot';

type CheckboxLabelProps = {
  disabled?: boolean;
  required?: boolean;
} & RealSystemChildrenProp;

const CheckboxLabel = ({
  children,
  disabled,
  required,
}: CheckboxLabelProps) => {
  return (
    <>
      {required && <RequiredDot disabled={disabled} />}
      <real.span
        display="flex"
        color={disabled ? 'gray-300' : 'gray-500'}
        fontFamily="body"
        fontScale="input"
        fontWeight="input">
        {children}
      </real.span>
    </>
  );
};

export { CheckboxLabel };
