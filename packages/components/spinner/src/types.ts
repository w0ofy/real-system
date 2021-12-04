import { Property } from 'csstype';

import { BoxProps } from '@real-system/box';
import { PaletteSizes, SizeTokens, TextColorTokens } from '@real-system/theme';

type IconSizes =
  | Extract<
      SizeTokens,
      | 'size-icon-10'
      | 'size-icon-20'
      | 'size-icon-30'
      | 'size-icon-40'
      | 'size-icon-50'
      | 'size-icon-60'
      | 'size-icon-70'
      | 'size-icon-80'
      | 'size-icon-90'
      | 'size-icon-100'
      | 'size-icon-110'
      | 'size-icon-button'
      | 'size-icon-button-small'
    >
  | PaletteSizes;

export type SpinnerProps = {
  title?: string;
  display?: Property.Display;
  size: IconSizes;
  as?: BoxProps['as'];
  delay?: number;
  color?: TextColorTokens;
};
