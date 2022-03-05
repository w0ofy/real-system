import { BoxAs, BoxStyleProps } from '@real-system/box-primitive';
import styled, { keyframes } from '@real-system/styling-library';
import { PaletteSizes } from '@real-system/theme-library';

import { circleCircumference } from './constants';

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
  animation: `4.25s linear infinite both ${svgKeyframes}` as unknown as string,
});
const SvgGroup = BoxAs<SVGGelementProps>('g');
const TrackCircle = BoxAs<SVGCircleElementProps>('circle');
const WheelCircle = styled(BoxAs<SVGCircleElementProps>('circle'))({
  animation:
    `1.5s ease-in-out infinite both ${circleKeyframes}` as unknown as string,
});

const STYLES_BY_SIZE: { [key in PaletteSizes]: BoxStyleProps } = {
  xxs: {
    size: 'spinner-1',
    borderWidth: 6,
  },
  xs: {
    size: 'spinner-2',
    borderWidth: 6,
  },
  sm: {
    size: 'spinner-3',
    borderWidth: 6,
  },
  md: {
    size: 'spinner-4',
    borderWidth: 6,
  },
  lg: {
    size: 'spinner-5',
    borderWidth: 8,
  },
  xl: {
    size: 'spinner-6',
    borderWidth: 9,
  },
  xxl: {
    size: 'spinner-7',
    borderWidth: 9,
  },
};

export { SpinnerSvg, STYLES_BY_SIZE, SvgGroup, TrackCircle, WheelCircle };
