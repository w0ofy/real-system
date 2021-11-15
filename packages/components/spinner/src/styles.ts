import { BoxAs, BoxProps, BoxStyleProps } from '@real-system/box';
import styled, { cssLiteral } from '@real-system/styling';

import { circleCircumference } from './constants';
import { circleKeyframes, svgKeyframes } from './keyframes';
import { SpinnerProps } from './types';

const TrackCircle = styled(BoxAs('circle'))({
  transformOrigin: 'center',
});

const WheelCircle = styled(BoxAs('circle'))({
  animation:
    cssLiteral`1.5s ease-in-out infinite both ${circleKeyframes}` as unknown as string,
  transformOrigin: 'center',
  strokeDasharray: circleCircumference,
});

const SvgGroup = styled(BoxAs('g'))<BoxProps>({
  stroke: 'currentColor',
  strokeLinecap: 'round',
  fill: 'transparent',
});

const SpinnerSvg = styled.svg({
  animation:
    cssLiteral`4.25s linear infinite both ${svgKeyframes}` as unknown as string,
  height: '100%',
  width: '100%',
  display: 'block',
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
