import React from 'react';

import { Heading, HeadingProps } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

type DialogHeadingProps = Omit<HeadingProps, 'variant'>;

const DialogHeading = (props: DialogHeadingProps) => (
  <Heading
    variant="heading3"
    marginBottom={0}
    data-testid={makeTestId('modal-heading')}
    {...props}
  />
);

export type { DialogHeadingProps };
export { DialogHeading };
