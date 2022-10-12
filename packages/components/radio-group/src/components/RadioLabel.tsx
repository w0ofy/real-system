import * as React from 'react';

import { real } from '@real-system/elements-primitive';

type RadioLabelProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const RadioLabel = ({ children, disabled }: RadioLabelProps) => {
  return (
    <real.span
      color={disabled ? 'gray-300' : 'gray-500'}
      fontFamily="body"
      fontScale="body"
      fontWeight={3}
      display="inline-flex"
      cursor={disabled ? 'default' : 'pointer'}
      alignItems="center"
      justifyContent="center"
      marginBottom={0}>
      {children}
    </real.span>
  );
};

export { RadioLabel };
