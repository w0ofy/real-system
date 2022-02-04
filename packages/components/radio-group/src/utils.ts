import {
  AriaRadioGroupProps,
  AriaRadioProps,
  CustomProps,
  RadioGroupProps,
  RadioProps,
} from './types';

const restoreRadioProps = (props: RadioProps): AriaRadioProps & CustomProps => {
  const { disabled, ...reactAriaAndCustomProps } = props;

  return {
    isDisabled: disabled,
    ...reactAriaAndCustomProps,
  };
};

const restoreRadioGroupProps = (
  props: RadioGroupProps
): AriaRadioGroupProps & CustomProps => {
  const { disabled, readonly, required, ...reactAriaAndCustomProps } = props;

  return {
    isDisabled: disabled,
    isReadOnly: readonly,
    isRequired: required,
    ...reactAriaAndCustomProps,
  };
};

export { restoreRadioGroupProps, restoreRadioProps };
