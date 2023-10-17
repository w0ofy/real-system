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
   * The status of the alert
   */
  status?: AlertProps['status'];
} & Pick<AlertProps, 'description' | 'onDismiss'> &
  FlexProps;

type ToasterToast = {
  id: string;
  /**
   * Time in milliseconds e.g. 500 converts to 0.5s
   */
  dismissAfter?: number | boolean;
  timeOutId?: number;
  onLeave?: (timeOutId: number) => void;
} & Pick<
  ToastProps,
  'status' | 'setFocus' | 'onDismiss' | 'message' | 'description'
>;

type PushProps = Partial<Omit<ToasterToast, 'timeOutId' | 'message'>>;
type PushCallbackProps = Omit<PushProps, 'status'>;
type PushCallback = (message: string, props?: PushCallbackProps) => void;

type UseToasterReturnedProps = {
  /**
   * Collection of toasts to show in the toaster
   */
  toasts: ToasterToast[];
  /**
   * Method used to push a defualt toast (`info`) to the toast stack
   */
  notify: PushCallback;
  /**
   * Method used to push an `danger` toast to the toast stack
   */
  danger: PushCallback;
  /**
   * Method used to push a `warning` toast to the toast stack
   */
  warning: PushCallback;
  /**
   * Method used to push a `success` toast to the toast stack
   */
  success: PushCallback;
  /**
   * Method used to remove a toast from the Toaster stack based on its `id`
   */
  pop: (id: ToasterToast['id']) => void;
};

type ToasterProps = {
  store: Pick<UseToasterReturnedProps, 'toasts' | 'pop'> & {
    /** **DO NOT USE.** This is typed here so it's easier to spread `store={toaster}` props to the Toaster component */
    danger?: PushCallback;
    /** **DO NOT USE.** This is typed here so it's easier to spread `store={toaster}` props to the Toaster component */
    warning?: PushCallback;
    /** **DO NOT USE.** This is typed here so it's easier to pass `store={toaster}` props to the Toaster component */
    success?: PushCallback;
    /** **DO NOT USE.** This is typed here so it's easier to spread `store={toaster}` props to the Toaster component */
    notify?: PushCallback;
  };
};

export type {
  PushCallback,
  PushProps,
  ToasterProps,
  ToasterToast,
  ToastProps,
  UseToasterReturnedProps,
};
