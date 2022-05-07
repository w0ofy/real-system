import type { UsePinInputProps } from './types';

const toArray = (value?: string) => value?.split('');

const validate = (value: string, type: UsePinInputProps['type']) => {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === 'alphanumeric' ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
};

export { toArray, validate };
