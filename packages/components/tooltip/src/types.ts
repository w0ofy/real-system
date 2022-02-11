import React from 'react';

import { AriaTooltipProps } from '@real-system/a11y-library';

type TooltipProps = {
  children: React.ReactNode;
  label: string;
} & AriaTooltipProps;

export type { TooltipProps };
