import TextareaAutosize from 'react-autosize-textarea';

import styled, { css, getStyleProps } from '@real-system/styling-library';
import { majorScale } from '@real-system/theme-library';

import { TextareaProps } from './types';

const TextareaElement = styled(TextareaAutosize)<TextareaProps>(
  css({
    appearance: 'none',
    background: 'transparent',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 'borderRadius20',
    boxShadow: 'none',
    color: 'inherit',
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 1,
    fontWeight: 1,
    lineHeight: 1,
    maxHeight: majorScale(30),
    outline: 'none',
    padding: 6,
    resize: 'vertical',
    width: '100%',

    '&::placeholder': {
      color: 'gray-200',
    },

    '&:hover::placeholder': {
      color: 'gray-300',
    },

    '&:focus::placeholder': {
      color: 'gray-300',
    },

    '&:disabled': {
      color: 'gray-300',
      cursor: 'not-allowed',
      // Fixes value color in Safari
      '-webkit-text-fill-color': 'gray-50',
      '-webkit-opacity': '1',
    },
  }),
  getStyleProps
);

export { TextareaElement };
