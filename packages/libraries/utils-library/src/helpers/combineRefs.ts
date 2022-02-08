import { MutableRefObject, RefCallback } from 'react';

type Ref<T> = MutableRefObject<T | null> | RefCallback<T | null> | null;
type Refs<T> = Ref<T>[];

function combineRefs<T>(...refs: Refs<T>): Ref<T> {
  return function combinedRefCallback(el) {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];

      if (typeof ref === 'function') {
        ref(el);
      } else if (typeof ref === 'object' && ref !== null && ref.current) {
        ref.current = el;
      } else if (ref === null) {
        // No-op
      } else {
        console.warn(
          '[react-combine-refs] Ref argument is neither an object with a .current property or a function. This is a no-op.'
        );
      }
    }
  };
}

export { combineRefs };
