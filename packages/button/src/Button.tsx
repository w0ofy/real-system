import { Box, BoxProps } from '@realsystem/box';
import { styled } from '@realsystem/styling';
import { BaseStyles } from './styles';

export type ButtonProps = BoxProps & {
  children: React.ReactNode;
  // size?: ButtonSizes;
  disabled?: boolean;
  loading?: boolean;
};

const Primitive = styled(Box)<ButtonProps>``;

const Button = (props: ButtonProps) => {
  const buttonStateStyles =
    BaseStyles[
      props.disabled ? 'disabled' : props.loading ? 'loading' : 'default'
    ];

  return (
    <Primitive
      as="button"
      {...props}
      {...buttonStateStyles}
      p={8}
      color="colorBrand"
    />
  );
};

export { Button };
