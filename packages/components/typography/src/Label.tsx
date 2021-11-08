import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';

import { RequiredDot } from './RequiredDot';
import { InternalTypographyProps } from './types';

export type LabelProps = {
  children?: React.ReactNode;
  htmlFor?: string;
  as?: 'label' | 'legend';
  disabled?: boolean;
  required?: boolean;
} & InternalTypographyProps;

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    { children, as = 'label', disabled, required, ...restProps },
    ref
  ): React.ReactElement => {
    const textColor = useMemo(
      () => (disabled ? 'color-text-disabled' : 'color-text'),
      [disabled]
    );

    return (
      <Box
        display="block"
        as={as}
        m={0}
        fontSize={1}
        fontWeight={3}
        mb={2}
        color={textColor}
        {...restProps}
        ref={ref}>
        {required ? (
          <RequiredDot
            color={disabled ? 'color-text-danger-weak' : 'color-text-danger'}
          />
        ) : null}
        {children}
      </Box>
    );
  }
);

Label.displayName = 'Label';

export { Label };
