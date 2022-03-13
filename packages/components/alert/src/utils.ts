import type { Icons } from '@real-system/icon';
import type { ColorSchemes } from '@real-system/theme-library';

import type { AlertIntents } from './types';

const ICON_MAP: Record<AlertIntents, Icons> = {
  info: 'information-circle',
  success: 'check-circle',
  danger: 'exclamation-circle',
  warning: 'exclamation-circle',
};

const INTENT_COLOR_MAP: Record<AlertIntents, ColorSchemes> = {
  success: 'green',
  info: 'blue',
  warning: 'orange',
  danger: 'red',
};

export { ICON_MAP, INTENT_COLOR_MAP };
