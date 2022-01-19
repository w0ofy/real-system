import type { AlertProps } from '@real-system/alert';
import type { FlexProps } from '@real-system/flex';

type ToastProps = {
  message: NonNullable<React.ReactNode>;
  /**
   * Callback for when user clicks the dismiss (x) button
   */
  onDismiss?: () => void;
  /**
   * Sets focus within the toast when it is rendered
   */
  setFocus?: boolean;
  /**
   * The intent of the alert
   */
  intent?: AlertProps['intent'];
} & Pick<AlertProps, 'description' | 'onDismiss'> &
  FlexProps;

type ToasterToast = {
  id: string;
  /**
   * Time in milliseconds e.g. 500 converts to 0.5s
   */
  dismissAfter?: number | boolean;
  timeOutId?: number;
} & Pick<
  ToastProps,
  'intent' | 'setFocus' | 'onDismiss' | 'message' | 'description'
>;

type PushProps = Partial<Omit<ToasterToast, 'timeOutId' | 'message'>>;

type UseToasterReturnedProps = {
  /**
   * Collection of toasts to show in the toaster
   */
  toasts: ToasterToast[];
  /**
   * Method used to push a defualt toast (`info`) to the toast stack
   */
  notify: (message: string, props?: Omit<PushProps, 'intent'>) => void;
  /**
   * Method used to push an `danger` toast to the toast stack
   */
  danger: (message: string, props?: Omit<PushProps, 'intent'>) => void;
  /**
   * Method used to push a `warning` toast to the toast stack
   */
  warning: (message: string, props?: Omit<PushProps, 'intent'>) => void;
  /**
   * Method used to push a `success` toast to the toast stack
   */
  success: (message: string, props?: Omit<PushProps, 'intent'>) => void;
  /**
   * Method used to remove a toast from the Toaster stack based on its `id`
   */
  pop: (id: ToasterToast['id']) => void;
};

type ToasterProps = Pick<UseToasterReturnedProps, 'toasts' | 'pop'> & {
  /** **DO NOT USE.** This is typed here so it's easier to spread `...toaster` props to the Toaster component */
  danger: any;
  /** **DO NOT USE.** This is typed here so it's easier to spread `...toaster` props to the Toaster component */
  warning: any;
  /** **DO NOT USE.** This is typed here so it's easier to spread `...toaster` props to the Toaster component */
  success: any;
  /** **DO NOT USE.** This is typed here so it's easier to spread `...toaster` props to the Toaster component */
  notify: any;
};

export type {
  PushProps,
  ToasterProps,
  ToasterToast,
  ToastProps,
  UseToasterReturnedProps,
};
