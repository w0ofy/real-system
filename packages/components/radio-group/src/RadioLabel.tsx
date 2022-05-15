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
      fontSize={1}
      fontWeight={3}
      lineHeight={1}
      marginBottom={0}>
      {children}
    </real.span>
  );
};

export { RadioLabel };
