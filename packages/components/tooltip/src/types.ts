import * as React from 'react';

import { AriakitTooltipStateProps } from '@real-system/ariakit-library';
import type { RealSystemElementProps } from '@real-system/utils-library';

type StateProps = Pick<
  AriakitTooltipStateProps,
  'visible' | 'timeout' | 'placement' | 'gutter'
>;
type TooltipProps = {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
  /**
   * Whether to show the tooltip's arrow or not
   * @default false
   */
  hideArrow?: boolean;
} & Partial<StateProps> &
  RealSystemElementProps;

export type { TooltipProps };
