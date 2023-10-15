import type { StylishPropNames } from './stylishProps';
import { isNotStylishProp, isStylishProp } from './stylishProps';

type PropSpreaderProps = Record<string, any>;

const { keys } = Object;

const spreadStyleProps = (
  props: PropSpreaderProps,
  propConfig?: Partial<Record<StylishPropNames, false>>
): PropSpreaderProps =>
  keys(props).reduce(
    (reducer: PropSpreaderProps, prop: string): PropSpreaderProps => {
      if (propConfig?.[prop] === false) {
        return reducer;
      } else if (isStylishProp(prop)) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      }

      return reducer;
    },
    {}
  );

const preventSpreadingStyleProps = (
  props: PropSpreaderProps,
  propConfig?: Partial<Record<StylishPropNames, true>>
): PropSpreaderProps =>
  keys(props).reduce(
    (reducer: PropSpreaderProps, prop: string): PropSpreaderProps => {
      if (propConfig?.[prop]) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      } else if (isNotStylishProp(prop)) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      }

      return reducer;
    },
    {}
  );

export { preventSpreadingStyleProps, spreadStyleProps };
