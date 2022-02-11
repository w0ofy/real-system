import { AriaOverlayPlacement, RestoredAriaOverlayPlacement } from './types';

const OVERLAY_PLACEMENT_MAP: Record<
  AriaOverlayPlacement,
  RestoredAriaOverlayPlacement
> = {
  bottom: 'bottom',
  'bottom-left': 'bottom left',
  'bottom-right': 'bottom right',
  'bottom-start': 'bottom start',
  'bottom-end': 'bottom end',
  top: 'top',
  'top-left': 'top left',
  'top-right': 'top right',
  'top-start': 'top start',
  'top-end': 'top end',
  left: 'left',
  'left-top': 'left top',
  'left-bottom': 'left bottom',
  start: 'start',
  'start-top': 'start top',
  'start-bottom': 'start bottom',
  right: 'right',
  'right-top': 'right top',
  'right-bottom': 'right bottom',
  end: 'end',
  'end-top': 'end top',
  'end-bottom': 'end bottom',
};

export { OVERLAY_PLACEMENT_MAP };
