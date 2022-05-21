import * as React from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import {
  SeparatorPrimitive,
  SeparatorPrimitiveProps,
} from '@real-system/separator-primitive';
import type { BorderProps, StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

type SeparatorProps = Pick<SeparatorPrimitiveProps, 'orientation'> &
  Omit<RealElementPrimitiveProps, keyof BorderProps> & {
    /**
     * Controls the width of the separator (`borderWidth` CSS property) — intelligently applies the border width to the correct border e.g. `borderLeftWidth` or `borderBottomWidth`
     *
     */
    borderWidth?: RealElementPrimitiveProps['borderWidth'];
    /**
     * Controls the style of the separator ('borderStyle' CSS property)
     */
    borderStyle?: RealElementPrimitiveProps['borderStyle'];
    /**
     * Controls the color of the separator ('borderColor' CSS property)
     */
    borderColor?: RealElementPrimitiveProps['borderColor'];
  };

const RealHR = real.hr;

type DividerStyles = {
  vertical: StylishProps;
  horizontal: StylishProps;
};

const makeDividerStyles = ({
  borderColor,
  borderWidth,
  borderStyle,
}: SeparatorProps): DividerStyles => ({
  vertical: {
    borderLeftWidth: borderWidth || '1px',
    width: 0,
    height: '100%',
    borderStyle,
    borderColor,
  },
  horizontal: {
    borderBottomWidth: borderWidth || '1px',
    width: '100%',
    height: 0,
    borderStyle,
    borderColor,
  },
});

/**
 * Layout component used to visually separate content in a list or group.
 * It renders the semantic `hr` HTML element by default and leverages borders
 * to display a horizontal or vertical line.
 * */
const Separator = React.forwardRef<HTMLElement, SeparatorProps>(
  function Separator(
    {
      orientation = 'horizontal',
      borderColor = 'currentColor',
      borderWidth = '1px',
      borderStyle = 'solid',
      ...restProps
    },
    ref
  ) {
    const dividerStyles = makeDividerStyles({
      borderColor,
      borderWidth,
      borderStyle,
    });

    return (
      <SeparatorPrimitive
        as={RealHR}
        data-testid={makeTestId('separator')}
        borderWidth={0}
        {...dividerStyles[orientation]}
        {...restProps}
        ref={ref}
      />
    );
  }
);

export type { SeparatorProps };
export { Separator };
