import { organScale } from '../utils/sizeUtils';

/**
 ** Scales that don't require palette
 **/

const space = {
  'space-0': '0',
  'space-1': organScale(1),
  'space-2': organScale(2),
  'space-3': organScale(3),
  'space-4': organScale(4),
  'space-5': organScale(5),
  'space-6': organScale(6),
  'space-7': organScale(7),
  'space-8': organScale(8),
  'space-9': organScale(9),
  'space-10': organScale(10),
  'space-11': organScale(11),
  'space-12': organScale(12),
  'space-13': organScale(13),
  'space-14': organScale(14),
  'space-15': organScale(15),
  'space-16': organScale(16),
  'space-17': organScale(17),
  'space-18': organScale(18),
  'space-19': organScale(19),
  'space-20': organScale(20),

  'space-negative-1': organScale(1, { destructive: true }),
  'space-negative-2': organScale(2, { destructive: true }),
  'space-negative-3': organScale(3, { destructive: true }),
  'space-negative-4': organScale(4, { destructive: true }),
  'space-negative-5': organScale(5, { destructive: true }),
  'space-negative-6': organScale(6, { destructive: true }),
  'space-negative-7': organScale(7, { destructive: true }),
  'space-negative-8': organScale(8, { destructive: true }),
  'space-negative-9': organScale(9, { destructive: true }),
  'space-negative-10': organScale(10, { destructive: true }),
  'space-negative-11': organScale(11, { destructive: true }),
  'space-negative-12': organScale(12, { destructive: true }),
  'space-negative-13': organScale(13, { destructive: true }),
  'space-negative-14': organScale(14, { destructive: true }),
  'space-negative-15': organScale(15, { destructive: true }),
  'space-negative-16': organScale(16, { destructive: true }),
  'space-negative-17': organScale(17, { destructive: true }),
  'space-negative-18': organScale(18, { destructive: true }),
  'space-negative-19': organScale(19, { destructive: true }),
  'space-negative-20': organScale(20, { destructive: true }),
};

const sizes = {
  'size-0': '0',
  'size-1': organScale(1),
  'size-2': organScale(2),
  'size-3': organScale(3),
  'size-4': organScale(4),
  'size-5': organScale(5),
  'size-6': organScale(6),
  'size-7': organScale(7),
  'size-8': organScale(8),
  'size-9': organScale(9),
  'size-10': organScale(10),
  'size-11': organScale(11),
  'size-12': organScale(12),
  'size-13': organScale(13),
  'size-14': organScale(14),
  'size-15': organScale(15),
  'size-16': organScale(16),
  'size-17': organScale(17),
  'size-18': organScale(18),
  'size-19': organScale(19),
  'size-20': organScale(20),
  'size-21': organScale(21),
  'size-22': organScale(22),
  'size-23': organScale(23),
  'size-24': organScale(24),
  'size-25': organScale(25),
  'size-26': organScale(26),
  'size-27': organScale(27),
  'size-28': organScale(28),
  'size-29': organScale(29),
  'size-30': organScale(30),

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
  'z-index-1': '10',
  'z-index-2': '20',
  'z-index-3': '30',
  'z-index-4': '40',
  'z-index-5': '50',
  'z-index-6': '60',
  'z-index-7': '70',
  'z-index-8': '80',
  'z-index-9': '90',
};

const radii = {
  'border-radius-0': '0',
  'border-radius-1': organScale(1),
  'border-radius-2': organScale(2),
  'border-radius-3': organScale(4),
  'border-radius-circle': '50%',
};

const letterSpacings = {
  'letter-space-0': '0',
  'letter-space-1': '0.05px',
  'letter-space-2': '0.1px',
  'letter-space-3': '0.25px',
  'letter-space-4': '0.3px',
  'letter-space-5': '0.5px',
};

const fontWeights = {
  // 'font-weight-light': 400,
  'font-weight-normal': '400',
  'font-weight-medium': '500',
  'font-weight-semibold': '600',
  'font-weight-bold': '700',
};

const fontSizes = {
  'font-size-1': organScale(5),
  'font-size-2': organScale(6),
  'font-size-3': organScale(7),
  'font-size-4': organScale(9),
  'font-size-5': organScale(11),
  'font-size-6': organScale(13),
  'font-size-7': organScale(15),
  'font-size-8': organScale(17),
  'font-size-9': organScale(19),
  'font-size-10': organScale(21),
  'font-size-11': organScale(23),
};

const lineHeights = {
  'line-height-1': organScale(5),
  'line-height-2': organScale(6),
  'line-height-3': organScale(7),
  'line-height-4': organScale(9),
  'line-height-5': organScale(11),
  'line-height-6': organScale(13),
  'line-height-7': organScale(15),
  'line-height-8': organScale(17),
  'line-height-9': organScale(19),
  'line-height-10': organScale(21),
  'line-height-11': organScale(23),
};

const fonts = {
  'font-family-text':
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  'font-family-code': "'Fira Mono', 'Courier New', Courier, monospace",
};

const borderWidths = {
  'border-width-0': '0',
  'border-width-1': '1px',
  'border-width-2': '2px',
  'border-width-3': '3px',
  'border-width-4': '4px',
  'border-width-5': '5px',
  'border-width-6': '6px',
  'border-width-7': '7px',
  'border-width-8': '8px',
  'border-width-9': '9px',
  'border-width-10': '10px',
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
