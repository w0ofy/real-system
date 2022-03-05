import React from 'react';

import { Box } from '@real-system/box-primitive';

type RadioLabelProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const RadioLabel = ({ children, disabled }: RadioLabelProps) => {
  return (
    <Box
      as="span"
      color={disabled ? 'color-text-strong-3' : 'color-text'}
      fontFamily="font-family-text"
      fontSize={1}
      fontWeight={1}
      lineHeight={1}
      marginBottom={0}>
      {children}
    </Box>
  );
};

export { RadioLabel };
