import { AriaButton_AriaButtonProps } from '@real-system/react-aria-library';

type ButtonPrimitiveAriaProps = Omit<
  AriaButton_AriaButtonProps<'button' | 'span'>,
  'isDisabled'
>;

import type { RealSystemElementProps } from '@real-system/types-library';

import type { ButtonPrimitiveBaseStyleProps } from './styleProps/props';
import { PSEUDO_PROP_STYLES } from './styleProps/pseudoPropStyles';

type ButtonPrimitivePseudoStyleProps = {
  [key in keyof typeof PSEUDO_PROP_STYLES]?: ButtonPrimitiveBaseStyleProps;
};

type ButtonPrimitiveStyleProps = ButtonPrimitiveBaseStyleProps &
  ButtonPrimitivePseudoStyleProps;

// Omits potential clashes from our style props with HTMLAttributes (i.e. color)
type ButtonPrimitiveElementProps = ButtonPrimitiveAriaProps & {
  /** controls the html tag of the button */
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'button'>;
  /** controls whether the button is disabled */
  disabled?: AriaButton_AriaButtonProps['isDisabled'];
  /** @deprecated `onClick` event handler for button - you can use this but it is recommended to use onPress to conform to cross-platform friendly events. */
  onClick?: React.MouseEventHandler<any>;
} & RealSystemElementProps;

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
