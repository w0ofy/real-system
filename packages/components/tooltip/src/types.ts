import React from 'react';

import { AriakitTooltipStateProps } from '@real-system/ariakit-library';
import type { RealSystemElementProps } from '@real-system/utils-library';

type StateProps = Pick<
  AriakitTooltipStateProps,
  'visible' | 'timeout' | 'placement'
>;
type TooltipProps = {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
} & Partial<StateProps> &
  RealSystemElementProps;

export type { TooltipProps };
