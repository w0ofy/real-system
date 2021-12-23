import React from 'react';

import { useButton } from '@real-system/aria-button';

type UseButtonParams = Parameters<typeof useButton>;
type ButtonAriaProps = UseButtonParams[0];

import type { ButtonPrimitiveBaseStyleProps } from './styleProps/props';
import { PSEUDO_PROP_STYLES } from './styleProps/pseudoPropStyles';

type ButtonPrimitivePseudoStyleProps = {
  [key in keyof typeof PSEUDO_PROP_STYLES]?: ButtonPrimitiveBaseStyleProps;
};

type ButtonPrimitiveStyleProps = ButtonPrimitiveBaseStyleProps &
  ButtonPrimitivePseudoStyleProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
type ButtonPrimitiveElementProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof ButtonPrimitiveStyleProps
> & {
  /** controls the html tag of the button */
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'a' | 'button'>;
  /** testid for unit testing libraries like @testing-library/react */
  'data-testid'?: string;
  /** controls whether the button is disabled */
  disabled?: ButtonAriaProps['isDisabled'];
  onClick?: React.MouseEventHandler<any>;
};

type ButtonPrimitiveProps = ButtonPrimitiveElementProps &
  ButtonPrimitiveStyleProps &
  ButtonAriaProps;

export type {
  ButtonAriaProps,
  ButtonPrimitiveElementProps,
  ButtonPrimitiveProps,
  ButtonPrimitivePseudoStyleProps,
  ButtonPrimitiveStyleProps,
};
