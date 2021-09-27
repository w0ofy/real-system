import { useTheme, styled } from '@realsystem/primitive';

export type ButtonProps = {
  children: React.ReactNode;
};

const Primitive = styled.button`
  border: 5px solid ${(props) => props.theme?.colors?.primary};
`;

const Button = (props: ButtonProps) => {
  const theme = useTheme();
  console.log('button', theme);
  return <Primitive {...props} />;
};

export { Button };
