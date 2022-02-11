import { useRadioGroup as useAriaRadioGroup } from '@react-aria/radio';
import { useRadioGroupState as useAriaRadioGroupState } from '@react-stately/radio';

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

const useRadioGroup: typeof useAriaRadioGroup = (props, state) => {
  const restoredProps = restoreRadioGroupProps(props);
  return useAriaRadioGroup(restoredProps, state);
};

export { useRadioGroup, useRadioGroupState };
