import React from 'react';

import { Box } from '@real-system/box-primitive';

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
      <Box
        as="span"
        color={disabled ? 'gray-300' : 'gray-500'}
        fontFamily="body"
        fontSize={1}
        fontWeight={3}
        lineHeight={1}
        marginBottom={0}>
        {children}
      </Box>
    </>
  );
};

export { CheckboxLabel };
