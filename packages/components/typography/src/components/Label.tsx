import React, { forwardRef, useMemo } from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';

import type { CommonTextProps } from '../Text.model';

import { BaseText } from './BaseText';
import { RequiredDot } from './RequiredDot';

export type LabelProps = {
  children?: React.ReactNode;
  htmlFor?: string;
  as?: 'label' | 'legend' | 'span';
  disabled?: boolean;
  required?: boolean;
  containerProps?: StylishProps;
  textProps?: StylishProps;
} & CommonTextProps;

/**
 * @todo refactor `containerProps`?
 */
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
      fontScale="label"
      fontWeight="label"
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
