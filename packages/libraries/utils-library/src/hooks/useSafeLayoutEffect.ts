import { useEffect, useLayoutEffect } from 'react';

import { canUseDOM } from '../helpers';

const isBrowser = canUseDOM();
/**
 * Safely use `useLayoutEffect` on server or client. If DOM is not accessible, `useEffect` (no-op) fn will be returned
 */
const useSafeLayoutEffect = isBrowser ? useLayoutEffect : () => useEffect;

export { useSafeLayoutEffect };
