import * as React from 'react';

import { BoxStyleProps } from '@real-system/box-primitive';
import {
  SeparatorPrimitive,
  SeparatorPrimitiveProps,
} from '@real-system/separator-primitive';
import type {
  BorderProps,
  RealSystemComponentProps,
  StylishProps,
} from '@real-system/styling-library';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

type SeparatorProps = Pick<SeparatorPrimitiveProps, 'orientation'> &
  Omit<RealSystemComponentProps, keyof BorderProps> & {
    /**
     * Controls the width of the separator (`borderWidth` CSS property) — intelligently applies the border width to the correct border e.g. `borderLeftWidth` or `borderBottomWidth`
     *
     */
    borderWidth?: BoxStyleProps['borderWidth'];
    /**
     * Controls the style of the separator ('borderStyle' CSS property)
     */
    borderStyle?: BoxStyleProps['borderStyle'];
    /**
     * Controls the color of the separator ('borderColor' CSS property)
     */
    borderColor?: BoxStyleProps['borderStyle'];
  };

const StyledHR = styled('hr')({});

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
        as={StyledHR}
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
