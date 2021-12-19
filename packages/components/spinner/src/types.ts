import { Property } from 'csstype';

import { BoxProps } from '@real-system/box';
import { PaletteSizes, TextColorTokens } from '@real-system/theme';

export type SpinnerProps = {
  title?: string;
  display?: Property.Display;
  size?: PaletteSizes;
  as?: BoxProps['as'];
  delay?: number;
  color?: TextColorTokens;
};
