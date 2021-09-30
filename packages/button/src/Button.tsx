import {
  useTheme,
  styled,
  compose,
  space,
  layout,
  flexbox,
  background,
  border,
  boxShadow,
  position,
  typography,
} from '@realsystem/styles';

export type ButtonProps = {
  children: React.ReactNode;
};

const Primitive = styled.button(
  {
    border: 0,
    cursor: 'pointer',
  },
  compose(
    space,
    layout,
    flexbox,
    background,
    border,
    boxShadow,
    position,
    typography
  )
);

const Button = (props: ButtonProps) => {
  const theme = useTheme();
  console.log('button', theme);
  return <Primitive {...props} p={2} />;
};

export { Button };
