import UIBox, { BoxProps as UIBoxProps } from 'ui-box';

export type BoxProps = UIBoxProps<any>;

const Box = (props: BoxProps) => {
  return <UIBox is="div" {...props} />;
};

export { Box };
