import type { StylishProps } from '@real-system/styled-library';
import { merge } from '@real-system/utils-library';

const resetStyles = {
  bg: 'none',
  border: 'none',
};

const baseStyles: StylishProps = {
  ...resetStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 'control',
  paddingX: 6,
  margin: 0,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 4,
  outline: 'none',
  boxShadow: 'none',
  bgColor: 'white',
  color: 'gray-500',
  cursor: 'text',
  fontScale: 'input',
  fontWeight: 'input',
  transition: 'box-shadow 150ms ease-in, border-color 150ms ease-in',
  boxSizing: 'border-box',
  _hover: {},
  _focusWithin: {},
  _active: { boxShadow: 'none' },
};

const selectStyles: Record<'default' | 'danger', StylishProps> = {
  default: merge(baseStyles, {
    borderColor: 'gray-200',
    _hover: {
      borderColor: 'gray-300',
    },
    _focusWithin: {
      borderColor: 'gray-300',
      boxShadow: 'focus-outline',
    },
    _expanded: {
      borderColor: 'gray-300',
    },
    _disabled: {
      color: 'gray-300',
      bgColor: 'gray-50',
      borderColor: 'gray-200',
      cursor: 'default',
    },
  }),
  danger: merge(baseStyles, {
    borderColor: 'red-500',
    _hover: { borderColor: 'red-600' },
    _focusWithin: {
      boxShadow: 'focus-outline',
      borderColor: 'red-600',
    },
    _active: { borderColor: 'red-600' },
  }),
};

export { selectStyles };
