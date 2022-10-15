import * as React from 'react';

import { runIfFn } from '../helpers';

import { useCallbackRef } from './useCallbackRef';

const useControllableProp = <T>(prop: T | undefined, state: T) => {
  const isControlled = prop !== undefined;
  const value = isControlled && typeof prop !== 'undefined' ? prop : state;
  return [isControlled, value] as const;
};

export type UseControllableStateProps<T> = {
  /**
   * The value to used in controlled mode
   */
  value?: T;
  /**
   * The initial value to be used, in uncontrolled mode
   */
  defaultValue?: T | (() => T);
  /**
   * The callback fired when the value changes
   */
  onChange?: (value: T, ...args: any[]) => void;
  /**
   * The function that determines if the state should be updated
   */
  shouldUpdate?: (prev: T, next: T) => boolean;
};
/**
 * Use optionally-controlled local/component state.
 */
const useControllableState = <T, OnChangeArgs = any>({
  value: valueProp,
  defaultValue,
  onChange,
  shouldUpdate = (prev, next) => prev !== next,
}: UseControllableStateProps<T>) => {
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  const [valueState, setValueState] = React.useState(defaultValue as T);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? (valueProp as T) : valueState;

  const updateValue = React.useCallback(
    (next: React.SetStateAction<T>, ...args: OnChangeArgs[]) => {
      const nextValue = runIfFn(next, value);

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!isControlled) {
        setValueState(nextValue);
      }

      onChangeProp(nextValue, ...args);
    },
    [isControlled, onChangeProp, shouldUpdateProp, value]
  );

  return [value, updateValue] as [
    T,
    (nextValue: React.SetStateAction<T>, ...args: OnChangeArgs[]) => void
  ];
};

export { useControllableProp, useControllableState };
