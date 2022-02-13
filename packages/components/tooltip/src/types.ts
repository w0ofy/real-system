import React from 'react';

import { AriaTooltipStateProps } from '@real-system/ariakit-library';
import type { RealSystemElementProps } from '@real-system/types-library';

type StateProps = Pick<
  AriaTooltipStateProps,
  'visible' | 'timeout' | 'placement'
>;
type TooltipProps = {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
} & Partial<StateProps> &
  RealSystemElementProps;

export type { TooltipProps };
