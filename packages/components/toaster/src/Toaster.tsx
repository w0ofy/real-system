import React, { useCallback, useEffect, useState } from 'react';

import {
  animated,
  useReducedMotion,
  useTransition,
} from '@real-system/animation-library';
import { Box } from '@real-system/box-primitive';
import { useToken } from '@real-system/theme-library';

import { Toast } from './Toast';
import { ToastPortal } from './ToastPortal';
import type { ToasterProps } from './types';

export const AnimatedToast = animated(Box);

interface ReturnTargetState {
  trigger: HTMLElement | null;
}

const enterWithReduceMotion = {
  marginBottom: 2,
  opacity: 1,
  transform: 'translateX(0px) scale(1)',
};

const onFocus =
  (
    returnTarget: ReturnTargetState,
    setReturnTarget: React.Dispatch<React.SetStateAction<ReturnTargetState>>
  ) =>
  (e) => {
    if (e.relatedTarget && !returnTarget.trigger) {
      setReturnTarget({
        trigger: e.relatedTarget as HTMLElement,
      });
    }
  };

const Toaster = ({ toasts, pop }: ToasterProps) => {
  const [refMap] = useState(() => new WeakMap());
  const [returnTarget, setReturnTarget] = useState<ReturnTargetState>({
    trigger: null,
  });
  const prefersReducedMotion = useReducedMotion();
  const marginBottom = useToken(4, 'space');

  const transitions = useTransition(toasts, {
    from: {
      marginBottom: '0rem',
      opacity: 0,
      transform: 'translateX(100%) scale(1)',
      height: prefersReducedMotion ? 'auto' : 0,
    },
    enter: prefersReducedMotion
      ? enterWithReduceMotion
      : (item) => async (next) => {
          await next({
            marginBottom,
            opacity: 1,
            transform: 'translateX(0px) scale(1)',
            height: refMap.get(item).offsetHeight,
          });
        },
    leave: {
      marginBottom: '0rem',
      opacity: 0,
      transform: 'translateX(0px) scale(0.8)',
      height: prefersReducedMotion ? 'auto' : 0,
    },
    config: {
      mass: 1,
      tension: 150,
      friction: 20,
    },
  });

  // Only clear the return target upon a change to the returnTarget to prevent an infinite loop caused by
  // state being updated in an effect.
  const clearReturnTarget = useCallback(() => {
    setReturnTarget({ trigger: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [returnTarget]);

  useEffect(() => {
    if (returnTarget.trigger != null && toasts.length === 0) {
      // place the user back to where they were in the UI
      returnTarget.trigger.focus();
      // clear the return target for the continuing UI session
      clearReturnTarget();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts]);

  return (
    <ToastPortal>
      {transitions((styles, item, state, index) => {
        return (
          <AnimatedToast as="div" key={state.key} style={styles}>
            <Toast
              key={item.id}
              {...item}
              onDismiss={() => {
                if (item.onDismiss != null) {
                  item.onDismiss();
                }
                pop(item.id);
              }}
              setFocus={index === 0}
              ref={(ref) => {
                if (ref != null) {
                  // Add ref so we can use it for height calculations
                  refMap.set(item, ref);
                }
              }}
              onFocus={onFocus(returnTarget, setReturnTarget)}>
              {item.message}
            </Toast>
          </AnimatedToast>
        );
      })}
    </ToastPortal>
  );
};

export { Toaster };
