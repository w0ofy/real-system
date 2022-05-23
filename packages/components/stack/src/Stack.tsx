import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import { RealSystemComponentProps } from '@real-system/styled-library';
import { getValidChildren, makeTestId } from '@real-system/utils-library';

import type { StackOptions, StackOrientation } from './Stack.types';
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
  Horizontal: typeof HorizontalStack;
  Vertical: typeof VerticalStack;
  Divider: typeof StackDivider;
  Item: typeof StackItem;
}

/**
 * `Stack`s help you easily create flexible and automatically distributed layouts.
 *
 * You can stack elements in a horizontal or vertical orientation, and apply a space and/or divider between each element.
 */
// @ts-expect-error Stack (component) properties iare defined on the fn object after this is defined
const Stack: StackComponent = React.forwardRef<HTMLDivElement, StackProps>(
  function Stack(props, ref) {
    const {
      inline,
      orientation: orientationProp,
      align,
      justify,
      spacing = '0.5rem',
      wrap,
      children,
      divider,
      containChildren,
      ...rest
    } = props;

    const orientation = inline ? 'row' : orientationProp ?? 'column';

    const styles = React.useMemo(
      () => getStackStyles({ orientation, spacing }),
      [orientation, spacing]
    );

    const dividerStyle = React.useMemo(
      () => getDividerStyles({ spacing, orientation }),
      [spacing, orientation]
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
            { sx: { ...(divider?.props?.sx || {}), ...dividerStyle } }
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
        sx={hasDivider ? {} : { [selector]: styles[selector] }}
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
        orientation="row"
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
        orientation="column"
        ref={ref}
      />
    );
  }
);

Stack.Horizontal = HorizontalStack;
Stack.Vertical = VerticalStack;
Stack.Item = StackItem;
Stack.Divider = StackDivider;

export type { StackOrientation };
export { Stack };
