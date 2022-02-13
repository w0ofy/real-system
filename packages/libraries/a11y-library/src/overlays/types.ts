import type {
  OverlayProps as AriaOverlayProps,
  OverlayTriggerProps as AriaOverlayTriggerProps,
  Placement,
} from '@react-types/overlays';

import type { KebabCase } from '@real-system/types-library';

type RestoredAriaOverlayPlacement = Placement;
type AriaOverlayPlacement = KebabCase<Placement>;

export type {
  AriaOverlayPlacement,
  AriaOverlayProps,
  AriaOverlayTriggerProps,
  RestoredAriaOverlayPlacement,
};
