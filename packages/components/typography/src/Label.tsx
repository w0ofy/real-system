import React, { forwardRef, useMemo } from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styling-library';

import { BaseText } from './BaseText';
import { RequiredDot } from './RequiredDot';
import type { CommonTextProps } from './types';

export type LabelProps = {
  children?: React.ReactNode;
  htmlFor?: string;
  as?: 'label' | 'legend';
  disabled?: boolean;
  required?: boolean;
  containerProps?: StylishProps;
  textProps?: StylishProps;
} & CommonTextProps;

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  {
    children,
    as = 'label',
    disabled,
    required,
    textProps,
    containerProps,
    cursor = 'pointer',
    ...restProps
  },
  ref
) {
  const dynamicStyles = useMemo(
    () => ({
      color: disabled ? 'gray-300' : 'gray-500',
      cursor: disabled ? 'default' : cursor,
    }),
    [cursor, disabled]
  );

  return (
    <BaseText
      as={as}
      display="block"
      padding={0}
      margin={0}
      marginBottom={2}
      fontSize={1}
      fontWeight={5}
      lineHeight={1}
      color={dynamicStyles.color}
      cursor={dynamicStyles.cursor}
      {...restProps}
      ref={ref}>
      <real.span
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        {...containerProps}>
        {required ? (
          <RequiredDot disabled={disabled} cursor={dynamicStyles.cursor} />
        ) : null}
        <real.span {...textProps}>{children}</real.span>
      </real.span>
    </BaseText>
  );
});

export { Label };
