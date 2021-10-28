import { BoxStyleProps } from '@realsystem/box';

export type ButtonSizes = 'small' | 'default';
export type ButtonVariants = 'primary' | 'secondary' | 'ghost';
export type ButtonIntents = 'default' | 'danger';
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;
type ButtonTypes = 'submit' | 'button' | 'reset';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BoxStyleProps & {
    size?: ButtonSizes;
    children: React.ReactNode;
    /** @todo add fullwidth feature */
    // fullWidth?: boolean;
    tabIndex?: ButtonTabIndexes;
    disabled?: boolean;
    type?: ButtonTypes;
    variant?: ButtonVariants;
    intent?: ButtonIntents;
    loading?: boolean;
  };

export type InternalButtonProps = Omit<ButtonProps, 'variant'> & {
  buttonState: ButtonStates;
  ref?: any;
};
