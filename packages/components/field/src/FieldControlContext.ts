import { useMemo } from 'react';

import { makeContext } from '@real-system/state-library';
import type { InvalidConfigProp } from '@real-system/typography';
import { isObject, isUndefined, Obj } from '@real-system/utils-library';

/**
 * @todo maybe make invalid optionally a config object?
 */
type FieldControlContext = {
  invalid?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

const [FieldControlProvider, useFieldControlContext] =
  makeContext<FieldControlContext>({
    strict: false,
    name: 'FieldControlContext',
  });

type FieldControlOptions = {
  invalid?: boolean | InvalidConfigProp;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

type FieldControlProps = {
  invalid?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

type FieldControl = {
  invalid: InvalidConfigProp;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

/**
 * Abstraction hook for using `FieldControlContext`
 */
const useFieldControl = <P extends Obj>({
  invalid,
  required,
  readOnly,
  disabled,
}: FieldControlOptions & P): FieldControl => {
  const context = useFieldControlContext();

  const { message, status, hideIcon } = useMemo(() => {
    const invalidControls = {
      isInvalid: invalid,
      hideIcon: false,
    } as InvalidConfigProp;

    if (isObject(invalid)) return invalid;

    return invalidControls;
  }, [invalid]);

  return {
    invalid: {
      status: isUndefined(status) ? context?.invalid : status,
      message,
      hideIcon,
    },
    required: isUndefined(required) ? context?.required : required,
    readOnly: isUndefined(readOnly) ? context?.readOnly : readOnly,
    disabled: isUndefined(disabled) ? context?.disabled : disabled,
  };
};

export type {
  FieldControl,
  FieldControlContext,
  FieldControlOptions,
  FieldControlProps,
};
export { FieldControlProvider, useFieldControl, useFieldControlContext };
