import type { FlexProps } from '@real-system/flex';
import type { PaletteIntents } from '@real-system/theme-library';

type AlertIntents = Extract<
  PaletteIntents,
  'info' | 'success' | 'danger' | 'warning'
>;

type CommonAlertProps = {
  intent?: AlertIntents;
} & Omit<FlexProps, 'as'>;

export type { AlertIntents, CommonAlertProps };
