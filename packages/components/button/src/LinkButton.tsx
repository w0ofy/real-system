import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@real-system/box';
import { ButtonPrimitive } from '@real-system/button-primitive';
import { merge } from '@real-system/utils';

import { baseStyles } from './styles';
import { InternalButtonProps } from './types';

const defaultStyles: BoxStyleProps = merge(baseStyles.default, {
  color: 'color-text-info-weak-1',
  backgroundColor: 'none',
  _hover: {
    color: 'color-text-info-strong-4',
  },
  _active: {
    color: 'color-text-brand-strong-7',
  },
});

const LinkButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  function LinkButton({ children, ...restProps }, ref): React.ReactElement {
    return (
      <ButtonPrimitive {...defaultStyles} {...restProps} ref={ref}>
        {children}
      </ButtonPrimitive>
    );
  }
);

export { LinkButton };
