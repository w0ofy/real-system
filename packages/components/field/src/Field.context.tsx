import { useMemo } from 'react';

import { makeContext } from '@real-system/state-library';
import type { InvalidConfig } from '@real-system/typography';
import { isObject, isUndefined, Obj, useUID } from '@real-system/utils-library';

type FieldControl = {
  invalid: InvalidConfig;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  id: string;
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
  readOnly?: boolean;
  disabled?: boolean;
  id?: string;
} & P;

/**
 * Abstraction hook for using `FieldControlContext`
 */
const useField = <P extends Obj = Record<string, any>>(
  options?: FieldControlOptions<P>
): FieldControl => {
  const { invalid, required, readOnly, disabled, id } = options || {};
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
    readOnly: isUndefined(readOnly) ? context?.readOnly : readOnly,
    disabled: isUndefined(disabled) ? context?.disabled : disabled,
    id: id || uid,
  };
};

export type { FieldControl, FieldControlOptions };
export { FieldProvider, useField, useFieldContext };
