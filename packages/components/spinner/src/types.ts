import { BoxProps } from '@real-system/box-primitive';
import { ColorTokens, ThemeSizes } from '@real-system/theme-library';

export type SpinnerProps = {
  title?: string;
  display?: BoxProps['display'];
  size?: ThemeSizes;
  as?: BoxProps['as'];
  delay?: number;
  color?: ColorTokens;
};
