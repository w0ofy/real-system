import type * as React from 'react';

import type { RealSystemElementProps } from '@real-system/styled-library';
import type { TooltipStatePrimitiveProps } from '@real-system/tooltip-primitive';

type StateProps = Pick<
  TooltipStatePrimitiveProps,
  'open' | 'timeout' | 'placement' | 'gutter'
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
  RealSystemElementProps<'span'>;

export type { TooltipProps };
