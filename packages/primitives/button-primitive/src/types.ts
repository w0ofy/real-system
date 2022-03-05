import type { AriakitButtonProps } from '@real-system/ariakit-library';
import type { StylishProps } from '@real-system/styling-library';

type ButtonPrimitiveStyleProps = StylishProps;

type ButtonPrimitiveProps = Omit<
  AriakitButtonProps<'button'>,
  'is' | 'as' | 'color'
> &
  ButtonPrimitiveStyleProps;

export type {
  // all props
  ButtonPrimitiveProps,
  // style props
  ButtonPrimitiveStyleProps,
};
