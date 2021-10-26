import { makeColorRange } from '../makeColorRange';

import palette from './palette';

const hue = makeColorRange('color-background');

const backgroundColors = {
  // in use
  'color-background-brand': 'rgb(99, 102, 241)',
  'color-background-brand-highlight': 'rgb(244,244,246)',
  'color-background-brand-muted': 'rgb(227, 225, 255)',
  'color-background-brand-weak': 'rgb(227, 225, 255)',
  'color-background-brand-strong': 'rgb(10, 37, 64)',
  'color-background-brand-inverse': 'rgb(255, 255, 255)',
  ...hue(palette.success, 'success'),
  ...hue(palette.danger, 'danger'),

  // Work in progress
  'color-background': 'rgb(244, 244, 246)',
  'color-background-strong': 'rgb(225, 227, 234)',
  'color-background-stronger': 'rgb(136, 145, 170)',
  'color-background-strongest': 'rgb(75, 86, 113)',

  'color-background-inverse': 'rgba(255, 255, 255, 0.1)',
  'color-background-inverse-weak': 'rgba(255, 255, 255, 0.2)',
  'color-background-inverse-strong': 'rgba(255, 255, 255, 0.2)',

  'color-background-body': 'rgb(255, 255, 255)',
  'color-background-body-inverse': 'rgb(10, 37, 64)',

  'color-background-overlay': 'rgba(10, 37, 64, 0.4)',
};

export default backgroundColors;
