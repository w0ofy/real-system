import React from 'react';

import { AriaTooltipProps } from '@real-system/a11y-library';
import type { RealSystemElementProps } from '@real-system/types-library';

type TooltipProps = {
  children: React.ReactNode;
  label: string;
} & AriaTooltipProps &
  RealSystemElementProps;

export type { TooltipProps };
