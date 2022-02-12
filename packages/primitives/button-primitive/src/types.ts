import type { ButtonProps as AriaButtonProps } from '@real-system/ariakit-library';
import type { RealSystemElementProps } from '@real-system/types-library';

import type { ButtonPrimitiveBaseStyleProps } from './styleProps/props';
import type { PseudoStyleProps } from './styleProps/pseudoPropStyles';

type ButtonPrimitiveAriaProps = Omit<AriaButtonProps<'button'>, 'is' | 'as'>;

type ButtonPrimitivePseudoStyleProps = {
  [key in PseudoStyleProps]?: ButtonPrimitiveBaseStyleProps;
};

type ButtonPrimitiveStyleProps = ButtonPrimitiveBaseStyleProps &
  ButtonPrimitivePseudoStyleProps;

type ButtonPrimitiveElementProps = ButtonPrimitiveAriaProps &
  RealSystemElementProps;

type ButtonPrimitiveProps = ButtonPrimitiveElementProps &
  ButtonPrimitiveStyleProps;

export type {
  // a11y props
  ButtonPrimitiveAriaProps,
  // element/component props
  ButtonPrimitiveElementProps,
  // all props
  ButtonPrimitiveProps,
  // pseudo style props
  ButtonPrimitivePseudoStyleProps,
  // style props
  ButtonPrimitiveStyleProps,
};
