import { ResponsiveValue, StylishProps } from '@real-system/styled-library';

type StackDirection = ResponsiveValue<
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
   * The direction in which the items are stacked.
   * A limited shorthand for `flexDirection` style prop
   */
  direction?: StackDirection;
  /**
   * If `true`, each stack item will show a separator
   */
  separator?: React.ReactElement;
  /**
   * If `true`, the children will be wrapped in a `Box` with
   * `display: inline-block`, and the `Box` will take the spacing props
   */
  containChildren?: boolean;
  /**
   * If `true` the items will be stacked horizontally.
   * This is a shortcut to `direction="row"` and will override `direction` prop
   */
  inline?: boolean;
};

export type { StackDirection, StackOptions };
