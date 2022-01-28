import type { Icons } from '@real-system/icon';

import type { AlertIntents } from './types';

const ICON_MAP: Record<AlertIntents, Icons> = {
  info: 'information-circle',
  success: 'check-circle',
  danger: 'exclamation-circle',
  warning: 'exclamation-circle',
};

export { ICON_MAP };
