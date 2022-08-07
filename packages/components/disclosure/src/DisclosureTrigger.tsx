import * as React from 'react';

import { DisclosurePrimitive } from '@real-system/disclosure-primitive';
import { Icon } from '@real-system/icon';
import type {
  RealSystemComponentProps,
  StylishProps,
} from '@real-system/styled-library';
import styled from '@real-system/styled-library';
import { merge } from '@real-system/utils-library';

import { useDisclosureStateContext } from './DisclosureContext';

const defaultStyles: StylishProps = {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  p: 6,
  px: 6,
  border: 'none',
  color: 'gray-800',
  backgroundColor: 'white',
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  _expanded: {
    backgroundColor: 'gray-50',
    color: 'gray-900',
  },
  _hover: {
    backgroundColor: 'gray-50',
    color: 'gray-900',
  },
  _active: {
    backgroundColor: 'gray-100',
    color: 'gray-900',
  },
  _focusVisible: {
    outline: 0,
    boxShadow: 'focus-outline',
  },
};

const containedStyles: StylishProps = merge(defaultStyles, {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray-100',
  borderRadius: 4,
  _expanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: 'transparent',
  },
});

const StyledDisclosureTrigger = styled('span')<{ contained?: boolean }>(
  ({ contained }) => (contained ? containedStyles : defaultStyles)
);

type DisclosureTriggerProps = RealSystemComponentProps<'div'> & {
  hideToggleIcon?: boolean;
};

/**
 * Can be used to create a custom Disclosure Toggle.
 * Is used internally, in conjunction with `DisclosureHeading` to create `DisclosureToggle`.
 */
const DisclosureTrigger = ({
  children,
  disabled,
  hideToggleIcon,
  ...restProps
}: DisclosureTriggerProps) => {
  const { state, ...restContext } = useDisclosureStateContext();
  const { open } = state;

  return (
    <DisclosurePrimitive
      as={StyledDisclosureTrigger}
      disabled={disabled}
      state={state}
      {...restContext}
      {...restProps}
      data-disclosure-trigger>
      <>
        {!hideToggleIcon && (
          <Icon
            icon="chevron-right"
            transform={open ? 'rotate(90deg)' : 'rotate(0deg)'}
            transition="transform .2s ease-in-out"
            mr={4}
            size="sm"
          />
        )}
        {children}
      </>
    </DisclosurePrimitive>
  );
};

export type { DisclosureTriggerProps };
export { DisclosureTrigger };
