import {
  AriaPositionProps,
  useOverlayPosition as useAriaOverlayPosition,
} from '@react-aria/overlays';

import { OVERLAY_PLACEMENT_MAP } from './constants';
import { AriaOverlayPlacement } from './types';

type UseOverlayPositionParams = {
  placement: AriaOverlayPlacement;
} & Omit<AriaPositionProps, 'placement'>;

const restoreProps = (props: UseOverlayPositionParams): AriaPositionProps => {
  const { placement = 'top', ...restProps } = props;
  return {
    placement: OVERLAY_PLACEMENT_MAP[placement],
    ...restProps,
  };
};

const useOverlayPosition = (props: UseOverlayPositionParams) =>
  useAriaOverlayPosition(restoreProps(props));

export { useOverlayPosition, UseOverlayPositionParams };
