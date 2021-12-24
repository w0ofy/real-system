import React from 'react';

import { Heading, HeadingProps } from '@real-system/typography';
import { makeTestId } from '@real-system/utils';

type DialogHeadingProps = Omit<HeadingProps, 'variant'>;

const DialogHeading = (props: DialogHeadingProps) => (
  <Heading
    variant="heading3"
    mb={0}
    data-testid={makeTestId('modal-heading')}
    {...props}
  />
);

export type { DialogHeadingProps };
export { DialogHeading };
