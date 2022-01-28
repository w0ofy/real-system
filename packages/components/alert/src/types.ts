import type { AlertPrimitiveProps } from '@real-system/alert-primitive';
import type { FlexProps } from '@real-system/flex';
import type { PaletteIntents } from '@real-system/theme-library';

type AlertIntents = Extract<
  PaletteIntents,
  'info' | 'success' | 'danger' | 'warning'
>;

type CommonAlertProps = {
  intent?: AlertIntents;
  /**
   * Controls whether the assistive technology should read immediately ("assertive") or wait until the user is idle ("polite").
   * */
  type?: AlertPrimitiveProps['type'];
} & Omit<FlexProps, 'as'>;

export type { AlertIntents, CommonAlertProps };
