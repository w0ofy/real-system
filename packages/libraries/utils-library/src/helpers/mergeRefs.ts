import { _logger } from '../private';

import { isFunction } from './assertion';

type ReactRef<T> =
  | React.Ref<T>
  | React.RefObject<T>
  | React.MutableRefObject<T>;

/**
 * Assign a value to a ref callback or object
 */
function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
    return;
  }

  try {
    // @ts-ignore
    ref.current = value;
  } catch (error) {
    _logger.throw.error(
      'utils',
      `Cannot assign value '${value}' to ref '${ref}'`
    );
  }
}

/**
 * Combine many React refs into a single ref fn
 */
function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}

export { mergeRefs };
