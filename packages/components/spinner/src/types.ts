import { BoxProps } from '@real-system/box';
import type { ColorTokens, ThemeSizes } from '@real-system/styled-library';

export type SpinnerProps = {
  title?: string;
  display?: BoxProps['display'];
  size?: ThemeSizes;
  as?: BoxProps['as'];
  delay?: number;
  color?: ColorTokens;
};
