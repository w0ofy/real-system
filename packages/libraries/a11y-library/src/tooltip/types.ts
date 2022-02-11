import type {
  AriaTooltipProps as OriginalAriaTooltipProps,
  TooltipTriggerProps,
} from '@react-types/tooltip';

import { AriaOverlayPlacement } from '../overlays/types';

/** renaming work */
type RenamedAriaProps = {
  disabled?: TooltipTriggerProps['isDisabled'];
  placement?: AriaOverlayPlacement;
};

type PropsToRename = 'isDisabled' | 'placement';

/** For tooltip components */
type AriaTooltipProps = Omit<OriginalAriaTooltipProps, PropsToRename> &
  RenamedAriaProps &
  Omit<TooltipTriggerProps, PropsToRename>;

type RestoredAriaTooltipProps = AriaTooltipProps & TooltipTriggerProps;

export type { AriaTooltipProps, RestoredAriaTooltipProps };
