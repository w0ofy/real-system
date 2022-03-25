import { BoxAs, BoxStyleProps } from '@real-system/box-primitive';
import styled, { keyframes } from '@real-system/styling-library';
import { ThemeSizes } from '@real-system/theme-library';

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
    `1.5s ease-out infinite both ${circleKeyframes}` as unknown as string,
});

const STYLES_BY_SIZE: Record<ThemeSizes, BoxStyleProps> = {
  xxs: {
    size: 'spinner-xxs',
    borderWidth: 6,
  },
  xs: {
    size: 'spinner-xs',
    borderWidth: 6,
  },
  sm: {
    size: 'spinner-sm',
    borderWidth: 6,
  },
  md: {
    size: 'spinner-md',
    borderWidth: 6,
  },
  lg: {
    size: 'spinner-lg',
    borderWidth: 8,
  },
  xl: {
    size: 'spinner-xl',
    borderWidth: 9,
  },
  xxl: {
    size: 'spinner-xxl',
    borderWidth: 9,
  },
};

export { SpinnerSvg, STYLES_BY_SIZE, SvgGroup, TrackCircle, WheelCircle };
