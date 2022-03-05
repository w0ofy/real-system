import { BoxProps } from '@real-system/box-primitive';
import { PaletteSizes, TextColorTokens } from '@real-system/theme-library';

export type SpinnerProps = {
  title?: string;
  display?: BoxProps['display'];
  size?: PaletteSizes;
  as?: BoxProps['as'];
  delay?: number;
  color?: TextColorTokens;
};
