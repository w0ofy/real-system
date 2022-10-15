import React, { forwardRef, useMemo } from 'react';

import { AriakitCheckboxProps } from '@real-system/ariakit-library';
import { real } from '@real-system/elements-primitive';
import {
  useReadyRef,
  useUID,
  ValidationProps,
} from '@real-system/utils-library';
import { makeTestId, useControllableState } from '@real-system/utils-library';

import { GenericSwitchProps } from './Switch.model';
import { SwitchKnob } from './SwitchKnob';
import { SwitchSupport } from './SwitchSupport';

type SwitchProps = {
  /**
   * Controlled toggle (on / off) state for `Switch`
   */
  on?: boolean;
  name?: string;
  /**
   * Updates controlled state. This is not the native event `onClick`.
   * Use `_onClick` to access `MouseEvent` on the click event, use the `_onClick` prop.
   */
  onClick?: (isOn: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
} & Omit<
  ValidationProps,
  'warningMessage' | 'readonly' | 'hasError' | 'errorMessage'
> &
  Pick<
    GenericSwitchProps,
    'children' | 'disabled' | 'id' | 'onBlur' | 'onFocus' | 'onChange'
  >;

const useSwitchIds = (id?: string) => {
  let switchId = useUID();
  const helpTextId = useUID();
  const labelId = useUID();
  switchId = id || switchId;

  return {
    helpTextId,
    labelId,
    switchId,
  };
};
/**
 * `Switch` is an interactive binary control that follows the ARIA `switch` role semantics.
 * `Switch` can be optionally controlled. If an `on` value is passed, simply pass `onClick` to update the `on` state.
 * */
const Switch = forwardRef<HTMLDivElement, SwitchProps>(function Switch(
  {
    children,
    on,
    disabled = false,
    onClick,
    helpText,
    id,
    required,
    ...restProps
  },
  ref
) {
  const [switchIsOn, setSwitchIsOn] = useControllableState<
    boolean,
    React.MouseEvent<HTMLDivElement> | React.KeyboardEvent
  >({
    defaultValue: on,
    value: on,
    onChange: onClick,
  });
  const [setSwitchRef, switchRef, switchRefReady] = useReadyRef(ref);
  const { switchId, helpTextId, labelId } = useSwitchIds(id);

  const { handleOnClick, handleOnKeyDown } = useMemo(() => {
    if (disabled) {
      return {
        handleOnClick: () => undefined,
        handleOnKeyDown: () => undefined,
      };
    }

    return {
      handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => {
        setSwitchIsOn((prev) => !prev, event);
        if (event.currentTarget.getAttribute('data-switch-support')) {
          if (switchRefReady) switchRef.current?.focus();
        }
      },
      handleOnKeyDown: (event: React.KeyboardEvent): void => {
        if (event.key === ' ') setSwitchIsOn((prev) => !prev, event);
      },
    };
  }, [disabled, setSwitchIsOn, switchRef, switchRefReady]);

  return (
    <real.span
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexShrink={0}
      gap={5}
      data-testid={makeTestId('switch-wrapper')}>
      <SwitchKnob
        id={switchId}
        on={switchIsOn}
        ref={setSwitchRef}
        disabled={disabled}
        labelId={labelId}
        helpTextId={helpText ? helpTextId : undefined}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
        {...restProps}
      />
      <SwitchSupport
        helpTextId={helpTextId}
        helpText={helpText}
        labelId={labelId}
        switchId={switchId}
        disabled={disabled}
        onClick={handleOnClick}
        required={required}>
        {children}
      </SwitchSupport>
    </real.span>
  );
});

export type { SwitchProps };
export { Switch };
