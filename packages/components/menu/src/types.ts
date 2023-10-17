import type { As, RealSystemComponentProps } from '@real-system/styled-library';

type CommonMenuProps<el extends As = any> = RealSystemComponentProps<el>;
type OmitMenuStore<Props> = Omit<Props, 'store'>;

export type { CommonMenuProps, OmitMenuStore };
