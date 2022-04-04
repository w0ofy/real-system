import React, { forwardRef } from 'react';

import type { AriakitSelectArrowProps } from '@real-system/ariakit-library';
import { AriakitSelectArrow } from '@real-system/ariakit-library';

import { OmitSelectPrivateProps } from './types';

type SelectArrowProps = OmitSelectPrivateProps<AriakitSelectArrowProps>;

/**
 * @todo maybe wrap in Box?
 */
const SelectArrow = forwardRef<HTMLSpanElement, SelectArrowProps>(
  function SelectArrow(props, ref) {
    return <AriakitSelectArrow {...props} ref={ref} />;
  }
);

export { SelectArrow };
