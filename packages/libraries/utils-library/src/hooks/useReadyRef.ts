import { useCallback, useRef, useState } from 'react';

import type { ReactRef } from '../helpers/mergeRefs';

import { useMergeRefs } from './useMergeRefs';

const useReadyRef = <T>(
  ...refs: (ReactRef<T> | null | undefined)[]
): [(node: T) => void, React.RefObject<T>, boolean] => {
  const [ready, setReady] = useState(false);
  const internalRef = useRef<T>(null);
  const mergeRefs = useMergeRefs(internalRef, ...refs);

  const setRef = useCallback(
    (node: T) => {
      if (node) {
        mergeRefs(node);
        setReady(!!node);
      }
    },
    [mergeRefs, refs]
  );

  return [setRef, internalRef, ready];
};

export { useReadyRef };
