import type { ReactRef } from '../helpers/mergeRefs';
import { mergeRefs } from '../helpers/mergeRefs';

function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
  return mergeRefs(...refs);
}

export { useMergeRefs };
