import { MutableRefObject, RefCallback, useCallback } from 'react';

type Ref<T> = MutableRefObject<T | null> | RefCallback<T | null> | null;
type Refs<T> = Ref<T>[];

const useMergedRef = <T>(...refs: Refs<T>): Ref<T> => {
  const filteredRefs = refs.filter(Boolean);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refCallback = useCallback(
    (current) => {
      if (filteredRefs.length > 1) {
        for (const ref of filteredRefs) {
          if (ref == null) continue;
          if (typeof ref === 'function') {
            ref(current);
          } else {
            ref.current = current;
          }
        }
      }
    },
    [filteredRefs]
  );

  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 1) return filteredRefs[0];

  return refCallback;
};

export { useMergedRef };
