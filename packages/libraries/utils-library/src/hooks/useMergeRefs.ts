import { useMemo } from 'react';

import type { ReactRef } from '../helpers/mergeRefs';
import { mergeRefs } from '../helpers/mergeRefs';

function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeRefs(...refs), refs);
}

export { useMergeRefs };
