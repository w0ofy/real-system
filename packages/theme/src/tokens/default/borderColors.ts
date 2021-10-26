import { makeColorRange } from '../makeColorRange';

const hue = makeColorRange('color-border');

const borderColors = {
  // used
  'color-border': 'rgb(136, 145, 170)',
  'color-border-alt': 'rgb(10, 37, 64)',

  'color-border-weak': 'rgb(202, 205, 216)',
  'color-border-weaker': 'rgb(225, 227, 234)',
  'color-border-strong': 'rgb(96, 107, 133)',

  'color-border-inverse': 'rgba(255, 255, 255, 0.5)',
  'color-border-inverse-weak': 'rgba(255, 255, 255, 0.3)',
  'color-border-inverse-weaker': 'rgba(255, 255, 255, 0.1)',
  'color-border-inverse-weakest': 'rgb(255, 255, 255, 0.05)',
  'color-border-inverse-strong': 'rgba(255, 255, 255, 0.7)',
  'color-border-inverse-stronger': 'rgba(255, 255, 255, 0.9)',
  'color-border-inverse-strongest': 'rgb(255, 255, 255)',

  'color-border-brand': 'rgb(99, 102, 241)',
  'color-border-brand-strong': 'rgb(18, 28, 45)',
  'color-border-brand-muted': 'rgb(176, 173, 255)',
  'color-border-brand-weak': 'rgb(176, 173, 255)',
  'color-border-brand-inverse': 'rgb(255, 255, 255)',

  ...hue('success'),
  ...hue('warning'),
  ...hue('danger'),
  ...hue('primary'),
};

export default borderColors;
