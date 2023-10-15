import type * as React from 'react';

type CircleGeometryProps = Pick<
  React.SVGProps<SVGCircleElement>,
  'cx' | 'cy' | 'r'
>;

const circleRadius = 35;
const circleGeometry: CircleGeometryProps = {
  cx: 50,
  cy: 50,
  r: circleRadius,
};

const circleCircumference = Math.PI * 2 * circleRadius;

export { circleCircumference, circleGeometry };
