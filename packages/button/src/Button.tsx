import {
  StyleProps,
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
  useTheme,
} from '@realsystem/styles';

export type ButtonProps = {
  children: React.ReactNode;
};

const Primitive = styled.button<StyleProps>`
  border: 0;
  cursor: pointer;
  background: ${({ theme }) => {
    console.log(theme);
    return theme?.colors?.primary || 'black';
  }};
  ${compose(
    space,
    layout,
    flexbox,
    background,
    border,
    boxShadow,
    position,
    typography
  )}
`;

const Button = (props: ButtonProps) => {
  const t = useTheme();
  console.log(t);
  return <Primitive {...props} p={2} />;
};

export { Button };
