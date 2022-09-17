import { useMemo } from 'react';

import { makeContext } from '@real-system/state-library';
import type { InvalidConfig } from '@real-system/typography';
import { isObject, isUndefined, Obj, useUID } from '@real-system/utils-library';

type FieldControl = {
  invalid: InvalidConfig;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  id: string;
  labelProps: Obj;
  inputProps: Obj;
};

const defaultInvalid = { status: false };

const [FieldProvider, useFieldContext] = makeContext<FieldControl>(
  {
    strict: false,
    name: 'FieldControlContext',
  },
  { invalid: defaultInvalid }
);

type FieldControlOptions<P extends Obj = Obj> = {
  invalid?: InvalidConfig;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  id?: string;
  labelProps?: Obj;
  inputProps?: Obj;
} & P;

/**
 * Abstraction hook for using `FieldControlContext`
 */
const useField = <P extends Obj = Obj>(
  options?: FieldControlOptions<P>
): FieldControl => {
  const { invalid, required, readonly, disabled, id, inputProps, labelProps } =
    options || {};
  const context = useFieldContext();
  const uid = useUID();

  const { message, status, hideIcon } = useMemo(() => {
    if (isObject(invalid)) return invalid;

    return context.invalid || defaultInvalid;
  }, [context, invalid]);

  const contextStatus = context?.invalid?.status || false;

  return {
    invalid: {
      status: isUndefined(status) ? contextStatus : status,
      message,
      hideIcon,
    },
    required: isUndefined(required) ? context?.required : required,
    readonly: isUndefined(readonly) ? context?.readonly : readonly,
    disabled: isUndefined(disabled) ? context?.disabled : disabled,
    id: id || uid,
    labelProps: labelProps || {},
    inputProps: inputProps || {},
  };
};

export type { FieldControl, FieldControlOptions };
export { FieldProvider, useField, useFieldContext };
