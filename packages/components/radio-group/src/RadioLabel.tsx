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
      color={disabled ? 'gray-300' : 'gray-500'}
      fontFamily="body"
      fontSize={1}
      fontWeight={5}
      lineHeight={1}
      marginBottom={0}>
      {children}
    </Box>
  );
};

export { RadioLabel };
