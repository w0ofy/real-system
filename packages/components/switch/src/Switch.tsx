import React, { forwardRef, useMemo } from 'react';

import { AriakitCheckboxProps } from '@real-system/ariakit-library';
import { real } from '@real-system/elements-primitive';
import { useUID, ValidationProps } from '@real-system/utils-library';
import { makeTestId, useControllableState } from '@real-system/utils-library';

import { SwitchKnob } from './SwitchKnob';
import { SwitchSupport } from './SwitchSupport';

type SwitchProps = {
  on?: boolean;
  /**
   * Updates controlled state. This is not the native event `onClick`.
   * Use `_onClick` to access `MouseEvent` on the click event, use the `_onClick` prop.
   */
  onClick?: () => void;
} & Omit<
  ValidationProps,
  'warningMessage' | 'readonly' | 'hasError' | 'errorMessage'
> &
  Pick<
    AriakitCheckboxProps,
    'children' | 'disabled' | 'id' | 'onBlur' | 'onFocus' | 'onChange' | 'name'
  >;
/**
 * `Switch` is an interactive binary control, similar to `Checkbox`, but with a more literal toggle-like aesthetic.
 * `Switch` can be optionally controlled. If a `on` value is passed,
 * simply pass `onClick` to update the `on` state.
 *
 * @todo focus switch when clicking label
 */
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
  let switchId = useUID();
  const helpTextId = useUID();
  const labelId = useUID();
  switchId = id || switchId;

  const [switchIsOn, setSwitchIsOn] = useControllableState<boolean>({
    defaultValue: on,
    value: on,
    onChange: onClick,
  });

  const { handleOnClick, handleOnKeyDown } = useMemo(() => {
    const onClick = () => {
      setSwitchIsOn((prev) => !prev);
    };

    const onKeyDown = (event: React.KeyboardEvent): void => {
      if (event.key === ' ' || event.key === 'Enter' || event.key === 'Space')
        setSwitchIsOn((prev) => !prev);
    };

    if (disabled) {
      return {
        handleOnClick: () => undefined,
        handleOnKeyDown: () => undefined,
      };
    }
    return {
      handleOnClick: onClick,
      handleOnKeyDown: onKeyDown,
    };
  }, [disabled, setSwitchIsOn]);

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
        ref={ref}
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
