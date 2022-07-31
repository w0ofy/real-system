import * as React from 'react';

import { CheckboxGroupLabelPrimitive } from '@real-system/checkbox-primitive';
import { real } from '@real-system/elements-primitive';
import type { RealSystemChildrenProp } from '@real-system/styled-library';
import { Text } from '@real-system/typography';

import { useCheckboxGroupContext } from './Checkbox.context';
import { RequiredDot } from './components';

type CheckboxGroupLabelProps = {
  disabled?: boolean;
  required?: boolean;
  helperText?: RealSystemChildrenProp['children'];
} & RealSystemChildrenProp;

const CheckboxGroupLabel = ({
  children,
  disabled,
  required: requiredProp,
  helperText,
}: CheckboxGroupLabelProps) => {
  const { required } = useCheckboxGroupContext();
  const isRequired = requiredProp || required;

  return (
    <CheckboxGroupLabelPrimitive
      as={real.span}
      display="flex"
      flexDirection="column"
      gap={2}
      mb={2}
      color={disabled ? 'gray-300' : 'gray-500'}
      fontFamily="body"
      fontScale="label"
      fontWeight="label">
      <real.span display="flex">
        <>
          {isRequired && <RequiredDot disabled={disabled} />}
          {children}
        </>
      </real.span>
      {helperText && (
        <Text.HelperText ml={isRequired ? 4 : 0}>{helperText}</Text.HelperText>
      )}
    </CheckboxGroupLabelPrimitive>
  );
};

export { CheckboxGroupLabel };
