import { ResponsiveValue, StylishProps } from '@real-system/styled-library';

type StackDirection = ResponsiveValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse'
>;

type StackOptions = {
  /**
   * Shorthand for `alignItems` style prop
   * @type StylishProps["alignItems"]
   */
  align?: StylishProps['alignItems'];
  /**
   * Shorthand for `justifyContent` style prop
   * @type StylishProps["justifyContent"]
   */
  justify?: StylishProps['justifyContent'];
  /**
   * Shorthand for `flexWrap` style prop
   * @type StylishProps["flexWrap"]
   */
  wrap?: StylishProps['flexWrap'];
  /**
   * The space between each stack item
   * @type StylishProps["margin"]
   */
  spacing?: StylishProps['margin'];
  /**
   * The direction to stack the items.
   */
  direction?: StackDirection;
  /**
   * If `true`, each stack item will show a divider
   * @type React.ReactElement
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

export type { StackDirection, StackOptions };
