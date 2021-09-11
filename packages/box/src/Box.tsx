import UIBox, { BoxProps as UIBoxProps } from 'ui-box';

export type BoxProps<T = any> = UIBoxProps<any>;

const Box = (props: BoxProps<any>) => {
  return <UIBox is="div" {...props} />;
};

export { Box };
