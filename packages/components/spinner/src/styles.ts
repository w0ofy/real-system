import { BoxAs, BoxStyleProps } from '@real-system/box';
import styled, { cssLiteral, keyframes } from '@real-system/styling';

import { circleCircumference } from './constants';
import { SpinnerProps } from './types';

const svgKeyframes = keyframes`
  0%,
  15% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(0);
  }
  50%,
  75% {
    stroke-dashoffset: ${circleCircumference * 0.2};
    transform: rotate(45deg);
  }
  100% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(360deg);
  }
`;

const circleKeyframes = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

type SVGElementProps = React.SVGAttributes<SVGSVGElement>;
type SVGCircleElementProps = React.SVGAttributes<SVGCircleElement>;
type SVGGelementProps = React.SVGAttributes<SVGGElement>;

const SpinnerSvg = styled(BoxAs<SVGElementProps>('svg'))({
  animation:
    cssLiteral`4.25s linear infinite both ${svgKeyframes}` as unknown as string,
});
const SvgGroup = BoxAs<SVGGelementProps>('g');
const TrackCircle = BoxAs<SVGCircleElementProps>('circle');
const WheelCircle = styled(BoxAs<SVGCircleElementProps>('circle'))({
  animation:
    cssLiteral`1.5s ease-in-out infinite both ${circleKeyframes}` as unknown as string,
});

const sizes: { [key in SpinnerProps['size']]: BoxStyleProps } = {
  'size-icon-10': {
    size: 'size-icon-10',
    borderWidth: 4,
  },
  'size-icon-20': {
    size: 'size-icon-20',
    borderWidth: 4,
  },
  'size-icon-30': {
    size: 'size-icon-30',
    borderWidth: 4,
  },
  'size-icon-40': {
    size: 'size-icon-40',
    borderWidth: 5,
  },
  'size-icon-50': {
    size: 'size-icon-50',
    borderWidth: 5,
  },
  'size-icon-60': {
    size: 'size-icon-60',
    borderWidth: 5,
  },
  'size-icon-70': {
    size: 'size-icon-70',
    borderWidth: 5,
  },
  'size-icon-80': {
    size: 'size-icon-80',
    borderWidth: 6,
  },
  'size-icon-90': {
    size: 'size-icon-90',
    borderWidth: 6,
  },
  'size-icon-100': {
    size: 'size-icon-100',
    borderWidth: 7,
  },
  'size-icon-110': {
    size: 'size-icon-110',
    borderWidth: 7,
  },
  'size-icon-button': {
    size: 'size-icon-20',
    borderWidth: 4,
  },
  'size-icon-button-small': {
    size: 'size-icon-10',
    borderWidth: 4,
  },
  xs: {
    size: 'size-icon-20',
    borderWidth: 4,
  },
  sm: {
    size: 'size-icon-40',
    borderWidth: 4,
  },
  md: {
    size: 'size-icon-40',
    borderWidth: 5,
  },
  lg: {
    size: 'size-icon-80',
    borderWidth: 6,
  },
  xl: {
    size: 'size-icon-100',
    borderWidth: 7,
  },
};

export { sizes, SpinnerSvg, SvgGroup, TrackCircle, WheelCircle };
