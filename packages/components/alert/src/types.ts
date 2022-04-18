import type { AlertPrimitiveProps } from '@real-system/alert-primitive';
import type { FlexProps } from '@real-system/flex';
import type { ThemeStatuses } from '@real-system/theme-library';

type AlertStatus = ThemeStatuses;

type CommonAlertProps = {
  status?: AlertStatus;
  /**
   * Controls whether the assistive technology should read immediately ("assertive") or wait until the user is idle ("polite").
   * */
  type?: AlertPrimitiveProps['type'];
} & Omit<FlexProps, 'as'>;

export type { AlertStatus, CommonAlertProps };
