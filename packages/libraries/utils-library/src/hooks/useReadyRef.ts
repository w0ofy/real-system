import { useCallback, useRef, useState } from 'react';

import { useMergeRefs } from './useMergeRefs';

const useReadyRef = (ref: any = null) => {
  const [ready, setReady] = useState(false);
  const internalRef = useRef<any>(null);
  const mergeRefs = useMergeRefs(internalRef, ref);

  const setRef = useCallback(
    <T>(node: T) => {
      mergeRefs(node);
      setReady(!!node);
    },
    [ref]
  );

  return [setRef, ref, ready];
};

export { useReadyRef };
