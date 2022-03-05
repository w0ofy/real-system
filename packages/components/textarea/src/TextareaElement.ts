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
      color: 'color-text-neutral-weak-6',
    },

    '&:hover::placeholder': {
      color: 'color-text-neutral-weak-4',
    },

    '&:focus::placeholder': {
      color: 'color-text-neutral-weak-4',
    },

    '&:disabled': {
      color: 'color-text-disabled-strong-3',
      cursor: 'not-allowed',
      // Fixes value color in Safari
      '-webkit-text-fill-color': 'color-text-disabled-strong-3',
      '-webkit-opacity': '1',
    },
  }),
  getStyleProps
);

export { TextareaElement };
