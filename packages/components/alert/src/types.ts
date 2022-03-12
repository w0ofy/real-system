import type { AlertPrimitiveProps } from '@real-system/alert-primitive';
import type { FlexProps } from '@real-system/flex';
import type { ThemeIntents } from '@real-system/theme-library';

type AlertIntents = Extract<
  ThemeIntents,
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
