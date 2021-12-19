import { organScale } from '../utils/sizeUtils';

/**
 ** Scales that don't require palette
 **/

const space = {
  'space-0': '0',
  'space-10': organScale(1),
  'space-20': organScale(2),
  'space-30': organScale(3),
  'space-40': organScale(4),
  'space-50': organScale(5),
  'space-60': organScale(6),
  'space-70': organScale(7),
  'space-80': organScale(8),
  'space-90': organScale(9),
  'space-100': organScale(10),
  'space-110': organScale(11),
  'space-120': organScale(12),
  'space-130': organScale(13),
  'space-140': organScale(14),
  'space-150': organScale(15),
  'space-160': organScale(16),
  'space-170': organScale(17),
  'space-180': organScale(18),
  'space-190': organScale(19),
  'space-200': organScale(20),

  'space-negative-10': organScale(1, { destructive: true }),
  'space-negative-20': organScale(2, { destructive: true }),
  'space-negative-30': organScale(3, { destructive: true }),
  'space-negative-40': organScale(4, { destructive: true }),
  'space-negative-50': organScale(5, { destructive: true }),
  'space-negative-60': organScale(6, { destructive: true }),
  'space-negative-70': organScale(7, { destructive: true }),
  'space-negative-80': organScale(8, { destructive: true }),
  'space-negative-90': organScale(9, { destructive: true }),
  'space-negative-100': organScale(10, { destructive: true }),
  'space-negative-110': organScale(11, { destructive: true }),
  'space-negative-120': organScale(12, { destructive: true }),
  'space-negative-130': organScale(13, { destructive: true }),
  'space-negative-140': organScale(14, { destructive: true }),
  'space-negative-150': organScale(15, { destructive: true }),
  'space-negative-160': organScale(16, { destructive: true }),
  'space-negative-170': organScale(17, { destructive: true }),
  'space-negative-180': organScale(18, { destructive: true }),
  'space-negative-190': organScale(19, { destructive: true }),
  'space-negative-200': organScale(20, { destructive: true }),
};

const sizes = {
  'size-0': '0',
  'size-10': organScale(1),
  'size-20': organScale(2),
  'size-30': organScale(3),
  'size-40': organScale(4),
  'size-50': organScale(5),
  'size-60': organScale(6),
  'size-70': organScale(7),
  'size-80': organScale(8),
  'size-90': organScale(9),
  'size-100': organScale(10),
  'size-110': organScale(11),
  'size-120': organScale(12),
  'size-130': organScale(13),
  'size-140': organScale(14),
  'size-150': organScale(15),
  'size-160': organScale(16),
  'size-170': organScale(17),
  'size-180': organScale(18),
  'size-190': organScale(19),
  'size-200': organScale(20),
  'size-210': organScale(21),
  'size-220': organScale(22),
  'size-230': organScale(23),
  'size-240': organScale(24),
  'size-250': organScale(25),
  'size-260': organScale(26),
  'size-270': organScale(27),
  'size-280': organScale(28),
  'size-290': organScale(29),
  'size-300': organScale(30),

  // should match fontSizes
  'size-icon-1': organScale(5),
  'size-icon-2': organScale(7), // i.e. button small and medium
  'size-icon-3': organScale(8), // i.e. button large
  'size-icon-4': organScale(10),
  'size-icon-5': organScale(12),
  'size-icon-6': organScale(13),
  'size-icon-7': organScale(15),

  'size-spinner-1': organScale(5),
  'size-spinner-2': organScale(7), // i.e. button small and medium
  'size-spinner-3': organScale(8), // i.e. button large
  'size-spinner-4': organScale(10),
  'size-spinner-5': organScale(12),
  'size-spinner-6': organScale(13),
  'size-spinner-7': organScale(15),
};

const zIndices = {
  'z-index-0': '0',
  'z-index-10': '10',
  'z-index-20': '20',
  'z-index-30': '30',
  'z-index-40': '40',
  'z-index-50': '50',
  'z-index-60': '60',
  'z-index-70': '70',
  'z-index-80': '80',
  'z-index-90': '90',
};

const radii = {
  'border-radius-0': '0',
  'border-radius-10': organScale(1),
  'border-radius-20': organScale(2),
  'border-radius-30': organScale(4),
  'border-radius-circle': '50%',
};

const letterSpacings = {
  'letter-space-0': '0',
  'letter-space-10': '0.05px',
  'letter-space-20': '0.1px',
  'letter-space-30': '0.25px',
  'letter-space-40': '0.3px',
  'letter-space-50': '0.5px',
};

const fontWeights = {
  // 'font-weight-light': 400,
  'font-weight-normal': 400,
  'font-weight-medium': 500,
  'font-weight-semibold': 600,
  'font-weight-bold': 700,
};

const fontSizes = {
  'font-size-10': organScale(5),
  'font-size-20': organScale(6),
  'font-size-30': organScale(7),
  'font-size-40': organScale(9),
  'font-size-50': organScale(11),
  'font-size-60': organScale(13),
  'font-size-70': organScale(15),
  'font-size-80': organScale(17),
  'font-size-90': organScale(19),
  'font-size-100': organScale(21),
  'font-size-110': organScale(23),
};

const lineHeights = {
  'line-height-10': organScale(5),
  'line-height-20': organScale(6),
  'line-height-30': organScale(7),
  'line-height-40': organScale(9),
  'line-height-50': organScale(11),
  'line-height-60': organScale(13),
  'line-height-70': organScale(15),
  'line-height-80': organScale(17),
  'line-height-90': organScale(19),
  'line-height-100': organScale(21),
  'line-height-110': organScale(23),
};

const fonts = {
  'font-family-text':
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  'font-family-code': "'Fira Mono', 'Courier New', Courier, monospace",
};

const borderWidths = {
  'border-width-0': '0',
  'border-width-10': '1px',
  'border-width-20': '2px',
  'border-width-30': '3px',
  'border-width-40': '4px',
  'border-width-50': '5px',
  'border-width-60': '6px',
  'border-width-70': '7px',
  'border-width-80': '8px',
  'border-width-90': '9px',
  'border-width-100': '10px',
};
export {
  borderWidths,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  zIndices,
};
