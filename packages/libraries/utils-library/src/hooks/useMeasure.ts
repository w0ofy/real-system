import { useMemo, useState } from 'react';

import { canUseDOM } from '../helpers';
import { noop } from '../helpers/function';

import { useIsomorphicLayoutEffect } from './useSafeLayoutEffect';

type UseMeasureRect = Pick<
  DOMRectReadOnly,
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
> &
  Pick<ResizeObserverSize, 'blockSize'>;
type UseMeasureRef<E extends Element = Element> = (element: E) => void;
type UseMeasureResult<E extends Element = Element> = [
  UseMeasureRef<E>,
  UseMeasureRect,
];

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  blockSize: 0,
};

function useMeasure<E extends Element = Element>(): UseMeasureResult<E> {
  const [element, ref] = useState<E | null>(null);
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);

  const observer = useMemo(
    () =>
      new (window as any).ResizeObserver((entries) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } =
            entries[0].contentRect;
          const { blockSize } = entries[0].borderBoxSize[0];

          setRect({ x, y, width, height, top, left, bottom, right, blockSize });
        }
      }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [ref, rect];
}

const isBrowser = canUseDOM();

const useSafeMeasure =
  isBrowser && typeof (window as any).ResizeObserver !== 'undefined'
    ? useMeasure
    : ((() => [noop, defaultState]) as typeof useMeasure);

export type { UseMeasureRect, UseMeasureRef, UseMeasureResult };
export { useMeasure, useSafeMeasure };
