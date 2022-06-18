import { useEffect, useLayoutEffect } from 'react';

import { canUseDOM } from '../helpers/dom';

const isBrowser = canUseDOM();
/**
 * Safely use `useLayoutEffect` on server or client. If DOM is not accessible, `useEffect` (no-op) fn will be returned
 */
const useSafeLayoutEffect = isBrowser ? useLayoutEffect : () => useEffect;
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export { useIsomorphicLayoutEffect, useSafeLayoutEffect };
