import type { RealSystemComponentProps } from '@real-system/styling-library';

type CommonMenuProps = RealSystemComponentProps<any>;
type OmitMenuState<Props> = Omit<Props, 'state'>;

export type { CommonMenuProps, OmitMenuState };
