import styled, {
  As,
  RealSystemComponent,
  RealSystemComponentProps,
  RealSystemStyledOptions,
  StyledDict,
  StylishProps,
} from '@real-system/styled-library';

type RealElements = {
  <T extends As, P = Record<string, any>>(
    component: T,
    options?: RealSystemStyledOptions
  ): RealSystemComponent<T, P>;
};

type DOMElements = keyof JSX.IntrinsicElements;

export type HTMLRealElements = {
  [Tag in DOMElements]: RealSystemComponent<Tag, StyledDict>;
};

function elements() {
  const cache = new Map<DOMElements, RealSystemComponent<DOMElements>>();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = real("div")
     * const RealComponent = real(Component)
     */
    apply(target, thisArg, argArray: [DOMElements, RealSystemStyledOptions]) {
      return styled(...argArray)({});
    },
    /**
     * @example
     * <real.div />
     */
    get(_, element: DOMElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element)({}));
      }
      return cache.get(element);
    },
  }) as unknown as RealElements & HTMLRealElements;
}

const real = elements();

/**
 * The return type of a real element e.g. `real.div`
 */
type RealElementPrimitive<
  T extends As = any,
  P = StyledDict
> = RealSystemComponent<T, P>;

type RealElementPrimitiveProps<
  T extends As = any,
  P = StyledDict
> = RealSystemComponentProps<T, P>;

export type { RealElementPrimitive, RealElementPrimitiveProps };
export { real };
