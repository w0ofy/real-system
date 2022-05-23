import { ResponsiveValue, StylishProps } from '@real-system/styled-library';

type StackOrientation = ResponsiveValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse'
>;

type StackOptions = {
  /**
   * Shorthand for `alignItems` style prop
   */
  align?: StylishProps['alignItems'];
  /**
   * Shorthand for `justifyContent` style prop
   */
  justify?: StylishProps['justifyContent'];
  /**
   * Shorthand for `flexWrap` style prop
   */
  wrap?: StylishProps['flexWrap'];
  /**
   * The space between each stack item
   */
  spacing?: StylishProps['margin'];
  /**
   * The orientation (or direction) in which the items are stacked
   */
  orientation?: StackOrientation;
  /**
   * If `true`, each stack item will show a divider
   */
  divider?: React.ReactElement;
  /**
   * If `true`, the children will be wrapped in a `Box` with
   * `display: inline-block`, and the `Box` will take the spacing props
   */
  containChildren?: boolean;
  /**
   * If `true` the items will be stacked horizontally.
   */
  inline?: boolean;
};

export type { StackOptions, StackOrientation };
