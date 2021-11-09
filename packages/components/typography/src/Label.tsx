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
    const dynamicStyles = useMemo(
      () => ({
        color: disabled ? 'color-text-disabled' : 'color-text',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }),
      [disabled]
    );

    return (
      <Box
        display="block"
        as={as}
        m={0}
        p={0}
        fontSize={1}
        lineHeight={2}
        fontWeight={3}
        cursor={dynamicStyles.cursor}
        mb={4}
        color={dynamicStyles.color}
        {...restProps}
        ref={ref}>
        <Box
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="flex-start">
          {required ? <RequiredDot disabled={disabled} /> : null}
          <Box as="span">{children}</Box>
        </Box>
      </Box>
    );
  }
);

Label.displayName = 'Label';

export { Label };
