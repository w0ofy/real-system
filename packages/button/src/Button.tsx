import { Box, BoxProps } from '@realsystem/box';
import { styled, composeStyleProps } from '@realsystem/styling';
// import { ButtonSizes, ButtonVariants } from './@types/button';
import { BaseStyles } from './styles';

export type ButtonProps = BoxProps & {
  children: React.ReactNode;
  // size?: ButtonSizes;
  disabled?: boolean;
  loading?: boolean;
};

const Primitive = styled(Box)<ButtonProps>(composeStyleProps());

const Button = (props: ButtonProps) => {
  const buttonStateStyles =
    BaseStyles[
      props.disabled ? 'disabled' : props.loading ? 'loading' : 'default'
    ];

  return <Primitive {...props} {...buttonStateStyles} />;
};

export { Button };
