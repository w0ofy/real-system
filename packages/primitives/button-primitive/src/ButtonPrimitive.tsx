import React, { forwardRef } from 'react';

import { useButton } from '@real-system/aria-button';
import { Box, BoxProps } from '@real-system/box';

type UseButtonParams = Parameters<typeof useButton>;
type ButtonAriaProps = UseButtonParams[0];
type ButtonBoxProps = Omit<BoxProps, keyof ButtonAriaProps | 'as'>;

type ButtonPrimitveProps = {
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'a' | 'button'>;
  disabled?: boolean;
} & ButtonBoxProps &
  ButtonAriaProps;

const ButtonPrimitive = forwardRef<HTMLElement, ButtonPrimitveProps>(
  function ButtonPrimitive<T = unknown>(
    { as = 'button', ...props }: ButtonPrimitveProps & T,
    ref
  ) {
    const { buttonProps } = useButton(
      { ...props, elementType: as, isDisabled: props.disabled },
      ref as React.RefObject<HTMLElement>
    );

    return <Box as={as} {...props} {...buttonProps} ref={ref} />;
  }
);

export type { ButtonAriaProps, ButtonPrimitveProps };
export { ButtonPrimitive };
