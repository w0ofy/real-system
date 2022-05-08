import { useEffect, useLayoutEffect } from 'react';

import { canUseDOM } from '../helpers';

/**
 * Safely use `useLayoutEffect` on server or client. If DOM is not accessible, `useEffect` (no-op) fn will be returned
 */
const useSafeLayoutEffect = canUseDOM() ? useLayoutEffect : () => useEffect;

export { useSafeLayoutEffect };
