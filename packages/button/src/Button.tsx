import { Box, BoxProps, safelySpreadProps } from '@realsystem/box';
import { styled } from '@realsystem/styling';
import { BaseStyles } from './styles';

export type ButtonProps = Partial<BoxProps> & {
  children: React.ReactNode;
  // size?: ButtonSizes;
  disabled?: boolean;
  loading?: boolean;
};

const Primitive = styled(Box)<ButtonProps>``;

const Button = ({ children, ...otherProps }: ButtonProps) => {
  const buttonStateStyles =
    BaseStyles[
      otherProps.disabled
        ? 'disabled'
        : otherProps.loading
        ? 'loading'
        : 'default'
    ];

  return (
    <Primitive {...safelySpreadProps(otherProps)} {...buttonStateStyles}>
      {children}
    </Primitive>
  );
};

export { Button };
