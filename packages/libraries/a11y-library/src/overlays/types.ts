import {
  OverlayProps,
  OverlayTriggerProps,
  Placement,
} from '@react-types/overlays';

import type { KebabCase } from '@real-system/types-library';

type RestoredAriaOverlayPlacement = Placement;

type AriaOverlayPlacement = KebabCase<Placement>;
type AriaOverlayProps = OverlayProps;
type AriaOverlayTriggerProps = OverlayTriggerProps;
export type {
  AriaOverlayPlacement,
  AriaOverlayProps,
  AriaOverlayTriggerProps,
  RestoredAriaOverlayPlacement,
};
