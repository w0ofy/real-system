// Kudos to:
// https://github.com/twilio-labs/paste/blob/main/packages/paste-libraries/animation/src/useReducedMotion.tsx
// https://joshwcomeau.com/react/prefers-reduced-motion/#the-hook
import { useEffect, useState } from 'react';

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

export const isRenderingOnServer = (() => {
  if (
    typeof window == 'undefined' ||
    !window.location ||
    !window.location.href ||
    !window.matchMedia
  ) {
    return true;
  }
  return false;
})();

const getMediaQueryList = (): {
  matches: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  addListener: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  removeListener: Function;
} => {
  if (isRenderingOnServer) {
    return {
      matches: true, // When SSR, true === disable animations
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: () => {},
    };
  }
  return window.matchMedia(REDUCE_QUERY);
};

function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getMediaQueryList().matches
  );

  useEffect((): (() => void) => {
    const mediaQueryList = getMediaQueryList();

    const handleChange = (): void => {
      setPrefersReducedMotion(mediaQueryList.matches);
    };

    mediaQueryList.addListener(handleChange);
    return () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

export { useReducedMotion };
