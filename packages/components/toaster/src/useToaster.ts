import { useCallback, useEffect, useRef, useState } from 'react';

import { uid } from '@real-system/utils-library';

import type {
  PushCallback,
  PushProps,
  ToasterToast,
  UseToasterReturnedProps,
} from './types';

const isValidInteger = (dismissAfter: unknown) =>
  dismissAfter != null && Number.isInteger(dismissAfter);

/**
 * Generates `Toaster` methods to control `toasts` and props to pass to `Toaster`
 */
const useToaster = function useToaster(): UseToasterReturnedProps {
  const isMounted = useRef<boolean | null>(null);
  const [toasts, setToasts] = useState<ToasterToast[]>([]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      /**
       * Clear all timeouts from the toaster when the component unmounts
       */
      toasts.forEach((toast) => {
        if (toast.timeOutId) {
          window.clearTimeout(toast.timeOutId);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pop = (id: ToasterToast['id']): void => {
    if (!isMounted.current) {
      return;
    }

    setToasts((currentToasts) =>
      currentToasts.filter((toast) => {
        // if the target toast has a related timeOut, clear that timeout as it's no longer needed
        if (toast.id === id) {
          if (toast.timeOutId) {
            window.clearTimeout(toast.timeOutId);
            toast.onLeave && toast.onLeave(toast.timeOutId);
          }
        }
        return toast.id !== id;
      })
    );
  };

  const push = useCallback(
    (message: string, props: PushProps = {}): void => {
      if (!isMounted.current) {
        return;
      }

      const { dismissAfter = 5000, id, ...toastProps } = props;

      const generatedID = uid(toastProps);
      const toastId = id || generatedID;
      let timeOutId;

      if (isValidInteger(dismissAfter)) {
        timeOutId = setTimeout(pop, dismissAfter as number, toastId);
      }

      // mutate existing state so react-spring does not re-run
      const existingToasts = toasts.map((toast) => {
        const tmpToast = toast;
        // setFocus to false so the new toast can be focused
        tmpToast.setFocus = false;
        return tmpToast;
      });

      // add the new toast and setFocus to true
      setToasts([
        {
          id: toastId,
          timeOutId,
          setFocus: true,
          message,
          ...toastProps,
        },
        ...existingToasts,
      ]);
    },
    [toasts]
  );

  const notify: PushCallback = useCallback(
    (message, props = {}) => push(message, { ...props, status: 'info' }),
    [push]
  );
  const danger: PushCallback = useCallback(
    (message, props = {}) => push(message, { ...props, status: 'danger' }),
    [push]
  );
  const warning: PushCallback = useCallback(
    (message, props = {}) => push(message, { ...props, status: 'warning' }),
    [push]
  );
  const success: PushCallback = useCallback(
    (message, props = {}) => push(message, { ...props, status: 'success' }),
    [push]
  );

  return { toasts, pop, danger, notify, warning, success };
};

export type { ToasterToast, UseToasterReturnedProps };
export { useToaster };
