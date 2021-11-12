import { Box, BoxStyleProps } from '@real-system/box';
import styled, { keyframes } from '@real-system/styling';

import { SpinnerProps } from './types';

const styles: { [key in SpinnerProps['size']]: BoxStyleProps } = {
  'size-icon-10': {
    size: 'size-icon-10',
    borderWidth: 2,
  },
  'size-icon-20': {
    size: 'size-icon-20',
    borderWidth: 2,
  },
  'size-icon-30': {
    size: 'size-icon-30',
    borderWidth: 2,
  },
  'size-icon-40': {
    size: 'size-icon-40',
    borderWidth: 2,
  },
  'size-icon-50': {
    size: 'size-icon-50',
    borderWidth: 3,
  },
  'size-icon-60': {
    size: 'size-icon-60',
    borderWidth: 3,
  },
  'size-icon-70': {
    size: 'size-icon-70',
    borderWidth: 3,
  },
  'size-icon-80': {
    size: 'size-icon-80',
    borderWidth: 4,
  },
  'size-icon-90': {
    size: 'size-icon-90',
    borderWidth: 5,
  },
  'size-icon-100': {
    size: 'size-icon-100',
    borderWidth: 5,
  },
  'size-icon-110': {
    size: 'size-icon-110',
    borderWidth: 5,
  },
  'size-icon-button': {
    size: 'size-icon-20',
    borderWidth: 2,
  },
  'size-icon-button-small': {
    size: 'size-icon-10',
    borderWidth: 2,
  },
  xs: {
    size: 'size-icon-10',
    borderWidth: 2,
  },
  sm: {
    size: 'size-icon-20',
    borderWidth: 2,
  },
  md: {
    size: 'size-icon-40',
    borderWidth: 2,
  },
  lg: {
    size: 'size-icon-60',
    borderWidth: 3,
  },
  xl: {
    size: 'size-icon-80',
    borderWidth: 3,
  },
};

const spinAnimation = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;

const Wheel = styled(Box)`
  animation: 1s linear infinite ${spinAnimation};
`;

export { styles, Wheel };
