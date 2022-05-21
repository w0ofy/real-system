import type { RealSystemComponentProps } from '@real-system/styled-library';

type CommonMenuProps = RealSystemComponentProps<any>;
type OmitMenuState<Props> = Omit<Props, 'state'>;

export type { CommonMenuProps, OmitMenuState };
