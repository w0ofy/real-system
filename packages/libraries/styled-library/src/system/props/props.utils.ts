import {
  isNotStylishProp,
  isStylishProp,
  StylishPropNames,
} from './stylishProps';

type PropSpreaderProps = Record<string, any>;
type PropFilter = (prop: any) => boolean;
type PropConfig = Partial<Record<StylishPropNames, boolean>>;

const { keys } = Object;

const makePropSpreader =
  (propConfig: PropConfig, strict = false) =>
  (props: PropSpreaderProps): PropSpreaderProps =>
    keys(props).reduce(
      (reducer: PropSpreaderProps, prop: string): PropSpreaderProps => {
        const configCondition: boolean | undefined = propConfig?.[prop];

        if (strict) {
          if (configCondition === true) {
            return {
              ...reducer,
              [prop]: props[prop],
            };
          }

          return reducer;
        }

        if (isStylishProp(prop)) {
          if (configCondition === false) {
            return reducer;
          }
          return {
            ...reducer,
            [prop]: props[prop],
          };
        }

        return reducer;
      },
      {}
    );

const makePropFilter =
  (propFilter: PropFilter) =>
  (props: PropSpreaderProps): PropSpreaderProps =>
    keys(props).reduce(
      (reducer: PropSpreaderProps, prop: string): PropSpreaderProps => {
        if (propFilter(prop)) {
          return {
            ...reducer,
            [prop]: props[prop],
          };
        }

        return reducer;
      },
      {}
    );

const preventStyleProps = (
  props: PropSpreaderProps,
  propConfig?: PropConfig
): PropSpreaderProps =>
  keys(props).reduce(
    (reducer: PropSpreaderProps, prop: string): PropSpreaderProps => {
      if (propConfig?.[prop]) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      }
      if (isNotStylishProp(prop)) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      }

      return reducer;
    },
    {}
  );

const spreadStyleProps = (
  props: PropSpreaderProps,
  propConfig?: PropConfig
): PropSpreaderProps =>
  keys(props).reduce(
    (reducer: PropSpreaderProps, prop: string): PropSpreaderProps => {
      if (propConfig?.[prop] === false) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      }
      if (isStylishProp(prop)) {
        return {
          ...reducer,
          [prop]: props[prop],
        };
      }

      return reducer;
    },
    {}
  );

export type { PropConfig, PropFilter, PropSpreaderProps };
export {
  makePropFilter,
  makePropSpreader,
  preventStyleProps,
  spreadStyleProps,
};
