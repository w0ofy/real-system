import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@real-system/box';
import { fns } from '@real-system/utils';

import { baseStyles, BoxAsButton } from './styles';
import { InternalButtonProps } from './types';

const { merge } = fns;

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
      <BoxAsButton {...defaultStyles} {...restProps} ref={ref}>
        {children}
      </BoxAsButton>
    );
  }
);

export { LinkButton };
