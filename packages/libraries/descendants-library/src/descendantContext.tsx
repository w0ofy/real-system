/**
 * Kudos to chakra-ui https://github.com/chakra-ui/chakra-ui/tree/next/packages/descendant
 * This code is a slightly-modified version of their own.
 */
import React, { RefCallback, useRef, useState } from 'react';

import { constate } from '@real-system/state-library';
import {
  AnyObj,
  cast,
  mergeRefs,
  Obj,
  useSafeLayoutEffect,
} from '@real-system/utils-library';

import { DescendantOptions, DescendantsManager } from './descendant';

/**
 * @internal
 * React hook that initializes the DescendantsManager
 */
function useDescendants<
  T extends HTMLElement = HTMLElement,
  K extends AnyObj = Obj
>() {
  const descendants = useRef(new DescendantsManager<T, K>());
  useSafeLayoutEffect(() => {
    return () => descendants.current.destroy();
  });
  return descendants.current;
}

export type DescendantContext = {
  value: ReturnType<typeof useDescendants>;
};

const [DescendantsContextProvider, useDescendantsContext] = constate(
  (descendants: DescendantContext) => descendants.value
);

/**
 * @internal
 * Provides information about a particular descendant
 */
function useDescendant<T extends HTMLElement = HTMLElement, K = Obj>(
  options?: DescendantOptions<K>
) {
  const descendants = useDescendantsContext();
  const [index, setIndex] = useState(-1);
  const ref = useRef<T>(null);

  useSafeLayoutEffect(() => {
    return () => {
      if (!ref.current) return;
      descendants.unregister(ref.current);
    };
  }, []);

  useSafeLayoutEffect(() => {
    if (!ref.current) return;
    const dataIndex = Number(ref.current.dataset['index']);
    if (index != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });

  const refCallback = options
    ? cast<RefCallback<T>>(descendants.register(options))
    : cast<RefCallback<T>>(descendants.register);

  return {
    descendants,
    index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref),
  };
}

type ContextProviderType<
  T extends HTMLElement = HTMLElement,
  K extends AnyObj = Obj
> = React.Provider<DescendantsManager<T, K>>;

/**
 * Function to provide strongly-typed versions of the descendants context provider and hooks.
 */
export function createDescendantContext<
  T extends HTMLElement = HTMLElement,
  K extends AnyObj = Obj
>() {
  const ContextProvider = cast<ContextProviderType<T, K>>(
    DescendantsContextProvider
  );

  const _useDescendantsContext = () =>
    cast<DescendantsManager<T, K>>(useDescendantsContext());

  const _useDescendant = (options?: DescendantOptions<K>) =>
    useDescendant<T, K>(options);

  const _useDescendants = () => useDescendants<T, K>();

  return [
    // context provider
    ContextProvider,
    // call this when you need to read from context
    _useDescendantsContext,
    // descendants state information, to be called and passed to `ContextProvider`
    _useDescendants,
    // descendant index information
    _useDescendant,
  ] as const;
}
