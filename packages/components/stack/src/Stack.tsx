import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import { RealSystemComponentProps } from '@real-system/styled-library';
import { getValidChildren } from '@real-system/utils-library';

import type { StackDirection, StackOptions } from './Stack.types';
import { getDividerStyles, getStackStyles, selector } from './Stack.utils';
import { StackDivider } from './StackDivider';
import { StackItem } from './StackItem';

export type StackProps = Omit<
  RealSystemComponentProps<'div'>,
  keyof StackOptions
> &
  StackOptions;

export interface StackComponent
  extends React.ForwardRefExoticComponent<StackProps> {
  Horizontal: typeof HStack;
  Vertical: typeof VStack;
  Divider: typeof StackDivider;
  Item: typeof StackItem;
}

/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 */
// @ts-expect-error Stack (component) properties iare defined on the fn object after this is defined
const Stack: StackComponent = React.forwardRef<HTMLDivElement, StackProps>(
  function Stack(props, ref) {
    const {
      inline,
      direction: directionProp,
      align,
      justify,
      spacing = '0.5rem',
      wrap,
      children,
      divider,
      className,
      containChildren,
      ...rest
    } = props;

    const direction = inline ? 'row' : directionProp ?? 'column';

    const styles = React.useMemo(
      () => getStackStyles({ direction, spacing }),
      [direction, spacing]
    );

    const dividerStyle = React.useMemo(
      () => getDividerStyles({ spacing, direction }),
      [spacing, direction]
    );

    const hasDivider = !!divider;
    const shouldUseChildren = !containChildren && !hasDivider;

    const validChildren = getValidChildren(children);

    const clones = shouldUseChildren
      ? validChildren
      : validChildren.map((child, index) => {
          // Prefer provided child key, fallback to index
          const key = typeof child.key !== 'undefined' ? child.key : index;
          const isLast = index + 1 === validChildren.length;
          const wrappedChild = <StackItem key={key}>{child}</StackItem>;
          const _child = containChildren ? wrappedChild : child;

          if (!hasDivider) return _child;

          const clonedDivider = React.cloneElement(
            divider as React.ReactElement<any>,
            { sx: dividerStyle }
          );

          const _divider = isLast ? null : clonedDivider;

          return (
            <React.Fragment key={key}>
              {_child}
              {_divider}
            </React.Fragment>
          );
        });

    return (
      <real.div
        ref={ref}
        display="flex"
        alignItems={align}
        justifyContent={justify}
        flexDirection={styles.flexDirection}
        flexWrap={wrap}
        className={className}
        sx={hasDivider ? {} : { [selector]: styles[selector] }}
        {...rest}>
        {clones}
      </real.div>
    );
  }
);

const HStack = React.forwardRef<HTMLDivElement, StackProps>(function Horiontal(
  props,
  ref
) {
  return <Stack align="center" {...props} direction="row" ref={ref} />;
});

const VStack = React.forwardRef<HTMLDivElement, StackProps>(function Vertical(
  props,
  ref
) {
  return <Stack align="center" {...props} direction="column" ref={ref} />;
});

Stack.Horizontal = HStack;
Stack.Vertical = VStack;
Stack.Item = StackItem;
Stack.Divider = StackDivider;

export type { StackDirection };
export { HStack, Stack, VStack };
