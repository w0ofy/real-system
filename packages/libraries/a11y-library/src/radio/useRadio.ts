import { useRadio as useAriaRadio } from '@react-aria/radio';

import { AriaRadioProps, RestoredAriaRadioProps } from './types';

const restoreRadioProps = (props: AriaRadioProps): RestoredAriaRadioProps => {
  const { disabled, ...reactAriaAndCustomProps } = props;

  return {
    isDisabled: disabled,
    ...reactAriaAndCustomProps,
  };
};

const useRadio: typeof useAriaRadio = (props, state, ref) => {
  const restoredProps = restoreRadioProps(props);
  return useAriaRadio(
    restoredProps,
    state,
    ref as React.RefObject<HTMLInputElement>
  );
};

export { useRadio };
