import React, { forwardRef } from 'react';

import { useButton } from '@real-system/aria-button';
import { Box, BoxProps, BoxStyleProps } from '@real-system/box';

type UseButtonParams = Parameters<typeof useButton>;
type ButtonAriaProps = UseButtonParams[0];
type ButtonBoxProps = Omit<BoxProps, keyof ButtonAriaProps | 'as'>;

type ButtonPrimitveProps = {
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'a' | 'button'>;
  disabled?: boolean;
} & ButtonBoxProps &
  ButtonAriaProps;

const buttonPrimitiveStyles: BoxStyleProps = {
  appearance: 'none',
  color: 'color-text',
  background: 'none',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  border: 1,
  borderRadius: 2,
  transition:
    'background-color 150ms ease-in-out, box-shadow 150ms ease-in, color 150ms ease-in-out',
  fontSize: 1,
  fontFamily: 'font-family-text',
  fontWeight: 1,
  textDecoration: 'none',
  position: 'relative',
  margin: 0,
  _focus: { boxShadow: 'shadow-focus', outline: 'none' },
  _active: { boxShadow: 'none' },
  _disabled: { cursor: 'not-allowed' },
};

const ButtonPrimitive = forwardRef<HTMLElement, ButtonPrimitveProps>(
  function ButtonPrimitive<T = unknown>(
    { as = 'button', ...props }: ButtonPrimitveProps & T,
    ref
  ) {
    const { buttonProps } = useButton(
      { ...props, elementType: as, isDisabled: props.disabled },
      ref as React.RefObject<HTMLElement>
    );

    return (
      <Box
        as={as}
        {...buttonPrimitiveStyles}
        {...props}
        {...buttonProps}
        ref={ref}
      />
    );
  }
);

export type { ButtonAriaProps, ButtonPrimitveProps };
export { ButtonPrimitive, buttonPrimitiveStyles };
