/* eslint-disable no-nested-ternary */
import { Func, FuncArguments } from '../types';

import { isFunction } from './assertion';

const runIfFn = <T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T => {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
};

const callAllHandlers = <T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) => {
  return function func(event: FuncArguments<T>[0]) {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };
};

const callAll = <T extends Func>(...fns: (T | undefined)[]) => {
  return function mergedFn(arg: FuncArguments<T>[0]) {
    fns.forEach((fn) => {
      fn?.(arg);
    });
  };
};

const noop = () => undefined;

export { callAll, callAllHandlers, noop, runIfFn };
