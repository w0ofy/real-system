import { useRadio as useAriaRadio } from '@react-aria/radio';

import type {
  AriaRadioGroupState,
  AriaRadioProps,
  RestoredAriaRadioProps,
} from './types';

const restoreRadioProps = (props: AriaRadioProps): RestoredAriaRadioProps => {
  const { disabled, ...reactAriaAndCustomProps } = props;

  return {
    isDisabled: disabled,
    ...reactAriaAndCustomProps,
  };
};

const useRadio = (
  props: AriaRadioProps,
  state: AriaRadioGroupState,
  ref: React.RefObject<HTMLInputElement>
) => {
  const restoredProps = restoreRadioProps(props);
  return useAriaRadio(restoredProps, state, ref);
};

export { useRadio };
