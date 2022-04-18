import type { SelectProps } from './types';

const maybeAutoPlacements = (placement: SelectProps['placement'], flip) => {
  if (
    placement === 'auto' ||
    placement === 'auto-end' ||
    placement === 'auto-start'
  ) {
    return true;
  }
  return flip;
};

export { maybeAutoPlacements };
