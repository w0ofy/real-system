import {
  Button as Primitive,
  ButtonProps as PrimitiveProps,
  useTheme,
} from '@realsystem/primitive';

export type ButtonProps = PrimitiveProps;

const Button = (props: ButtonProps) => {
  const t = useTheme();
  console.log('button', t);
  return <Primitive sx={{ color: 'primary' }} {...props} />;
};

export { Button };
