import React from 'react';

import { AriaTooltipProps } from '@real-system/react-aria-library';

type TooltipProps = {
  children: React.ReactNode;
  label: string;
} & AriaTooltipProps;

export type { TooltipProps };
