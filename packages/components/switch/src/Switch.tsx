import React, { forwardRef, useMemo } from 'react';

import { real } from '@real-system/elements-primitive';
import type { ValidationProps } from '@real-system/utils-library';
import { useReadyRef } from '@real-system/utils-library';
import { makeTestId, useControllableState } from '@real-system/utils-library';

import type { CommonSwitchProps, LabelPlacement } from './Switch.model';
import { getPlacement, useSwitchIds } from './Switch.utils';
import { SwitchKnob } from './SwitchKnob';
import { SwitchSupport } from './SwitchSupport';

type SwitchProps = {
  /**
   * Label for the switch
   */
  children?: React.ReactNode;
  /**
   * Controlled toggle (on / off) state for `Switch`
   */
  on?: boolean;
  /**
   * Name for the switch field
   */
  name?: string;
  /**
   * Whether to place the label on the left or right of the switch
   */
  labelPlacement?: LabelPlacement;
  /**
   * Updates controlled state. This is not the native event `onClick`.
   * Use `_onClick` to access `MouseEvent` on the click event, use the `_onClick` prop.
   */
  onClick?: (isOn: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
} & Omit<
  ValidationProps,
  'warningMessage' | 'readonly' | 'hasError' | 'errorMessage'
> &
  Pick<CommonSwitchProps, 'id' | 'onBlur' | 'onFocus' | 'onChange'>;

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
    labelPlacement = 'right',
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
      {...getPlacement(labelPlacement)}
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
