import { StylishProps } from '@real-system/styled-library';
import { useUID } from '@real-system/utils-library';

import type { LabelPlacement } from './Switch.model';

const useSwitchIds = (id?: string) => {
  let switchId = useUID();
  const helpTextId = useUID();
  const labelId = useUID();
  switchId = id || switchId;

  return {
    helpTextId,
    labelId,
    switchId,
  };
};

const getPlacement = (
  placement: LabelPlacement
): Pick<StylishProps, 'alignItems' | 'justifyContent' | 'flexDirection'> => {
  if (placement === 'left') {
    return {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flexDirection: 'row-reverse',
    };
  }
  return {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  };
};
