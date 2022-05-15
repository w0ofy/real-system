import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import {
  SelectLabelPrimitive,
  useSelectStatePrimitive,
} from '@real-system/select-primitive';
import { spreadStyleProps } from '@real-system/styling-library';

import { SelectContextProvider } from './SelectContext';
import { SelectContainerProps } from './types';

const ACCEPTED_LABEL_NAMES = {
  Label: true,
  SelectLabel: true,
};

const makeValidChildren = (children, state) => {
  const validChildren: any[] = [];
  let label: React.ReactElement | undefined = undefined;

  React.Children.toArray(children).forEach((child) => {
    // @ts-ignore
    if (ACCEPTED_LABEL_NAMES[child.type?.displayName]) {
      const labelChild = child as React.ReactElement;
      label = (
        <SelectLabelPrimitive
          as={(labelProps) =>
            React.cloneElement(labelChild as React.ReactElement, {
              ...labelProps,
              ...labelChild.props,
              cursor: 'pointer',
            })
          }
          state={state}
        />
      );
    } else {
      validChildren.push(child);
    }
  });

  return [
    label ? label : undefined,
    validChildren.length ? validChildren : undefined,
  ];
};

/**
 * The container and context provider for `Select` components.
 * When using or nesting a `label` inside `SelectContainer`, be sure the component's `displayName` is `Label` or `SelectLabel`.
 * If the `displayName` is not either of those, the label will not get rendered.
 */
const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>(
  function SelectContainer(
    {
      children,
      placement = 'bottom',
      flip = true,
      error = false,
      ...restProps
    },
    ref
  ) {
    const state = useSelectStatePrimitive({
      placement,
      gutter: 2,
      sameWidth: true,
      flip,
      ...restProps,
    });

    const [label, validChildren] = useMemo(
      () => makeValidChildren(children, state),
      [children, state]
    );

    return (
      <Box
        display="flex"
        flexDirection="column"
        {...spreadStyleProps(restProps)}
        ref={ref}>
        <SelectContextProvider state={{ ...state, error }}>
          <>
            {label ? label : null}
            {validChildren ? validChildren : null}
          </>
        </SelectContextProvider>
      </Box>
    );
  }
);

export type { SelectContainerProps };
export { SelectContainer };
