import { makeColorRange } from '../makeColorRange';

const hue = makeColorRange('color-text');

const textColors = {
  // in use
  'color-text': 'rgb(18, 28, 45)',
  'color-text-alt': 'rgb(10, 37, 64)',
  'color-text-brand': 'rgb(99, 102, 241)',
  'color-text-brand-inverse': 'rgb(255, 255, 255)',
  'color-text-brand-muted': 'rgb(174, 178, 193)',

  ...hue('success'),
  ...hue('warning'),
  ...hue('danger'),
};

export default textColors;
