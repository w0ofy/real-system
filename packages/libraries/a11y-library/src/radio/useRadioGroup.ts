import { useRadioGroup as useAriaRadioGroup } from '@react-aria/radio';
import {
  RadioGroupState,
  useRadioGroupState as useAriaRadioGroupState,
} from '@react-stately/radio';

import { AriaRadioGroupProps, RestoredAriaRadioGroupProps } from './types';

const restoreRadioGroupProps = (
  props: AriaRadioGroupProps
): RestoredAriaRadioGroupProps => {
  const { disabled, readonly, required, ...reactAriaAndCustomProps } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isRequired: required,
    ...reactAriaAndCustomProps,
  };
};

const useRadioGroupState = (props) => {
  const restoredProps = restoreRadioGroupProps(props);
  return useAriaRadioGroupState(restoredProps);
};

const useRadioGroup = (props: AriaRadioGroupProps, state: RadioGroupState) => {
  const restoredProps = restoreRadioGroupProps(props);
  return useAriaRadioGroup(restoredProps, state);
};

type AriaRadioLabelProps = ReturnType<typeof useRadioGroup>['labelProps'];

export type { AriaRadioLabelProps };
export { useRadioGroup, useRadioGroupState };
