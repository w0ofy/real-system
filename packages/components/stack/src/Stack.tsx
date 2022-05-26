import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type {
  CSSObject,
  RealSystemComponentProps,
} from '@real-system/styled-library';
import { getValidChildren, makeTestId } from '@real-system/utils-library';

import type { StackDirection, StackOptions } from './Stack.types';
import { getSeparatorStyles, getStackStyles, selector } from './Stack.utils';
import { StackItem } from './StackItem';
import { StackSeparator } from './StackSeparator';

export type StackProps = Omit<
  RealSystemComponentProps<'div'>,
  keyof StackOptions
> &
  StackOptions;

export interface StackComponent
  extends React.ForwardRefExoticComponent<StackProps> {
  Horizontal: typeof HorizontalStack;
  Vertical: typeof VerticalStack;
  Separator: typeof StackSeparator;
  Item: typeof StackItem;
}

/**
 * `Stack`s help you easily create flexible and automatically distributed layouts.
 *
 * You can stack elements in a horizontal or vertical direction, and apply a space and/or separator between each element.
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
      separator,
      containChildren,
      ...rest
    } = props;

    const direction = inline ? 'row' : directionProp ?? 'column';

    const styles = React.useMemo(
      () => getStackStyles({ direction, spacing }),
      [direction, spacing]
    );

    const separatorStyle = React.useMemo(
      () => getSeparatorStyles({ spacing, direction }),
      [spacing, direction]
    );

    const hasSeparator = !!separator;
    const shouldUseChildren = !containChildren && !hasSeparator;

    const validChildren = getValidChildren(children);

    const clones = shouldUseChildren
      ? validChildren
      : validChildren.map((child, index) => {
          // Prefer provided child key, fallback to index
          const key = typeof child.key !== 'undefined' ? child.key : index;
          const isLast = index + 1 === validChildren.length;
          const wrappedChild = <StackItem key={key}>{child}</StackItem>;
          const _child = containChildren ? wrappedChild : child;

          if (!hasSeparator) return _child;

          const clonedSeparator = React.cloneElement(
            separator as React.ReactElement<any>,
            { __css: { ...(separator?.props?.sx || {}), ...separatorStyle } }
          );

          const _separator = isLast ? null : clonedSeparator;

          return (
            <React.Fragment key={key}>
              {_child}
              {_separator}
            </React.Fragment>
          );
        });

    const maybeHasSeparatorStyles = React.useMemo(
      () =>
        hasSeparator
          ? {}
          : {
              [selector]: styles[selector],
            },
      [hasSeparator, styles]
    ) as CSSObject;

    return (
      <real.div
        ref={ref}
        display="flex"
        alignItems={align}
        justifyContent={justify}
        flexWrap={wrap}
        flexDirection={styles.flexDirection}
        __css={maybeHasSeparatorStyles}
        data-testid={makeTestId('stack')}
        {...rest}>
        {clones}
      </real.div>
    );
  }
);

const HorizontalStack = React.forwardRef<HTMLDivElement, StackProps>(
  function HorizontalStack(props, ref) {
    return (
      <Stack
        align="center"
        data-testid={makeTestId('horizontal-stack')}
        {...props}
        direction="row"
        ref={ref}
      />
    );
  }
);

const VerticalStack = React.forwardRef<HTMLDivElement, StackProps>(
  function VerticalStack(props, ref) {
    return (
      <Stack
        align="center"
        data-testid={makeTestId('vertical-stack')}
        {...props}
        direction="column"
        ref={ref}
      />
    );
  }
);

Stack.Horizontal = HorizontalStack;
Stack.Vertical = VerticalStack;
Stack.Item = StackItem;
Stack.Separator = StackSeparator;

export type { StackDirection };
export { Stack };
