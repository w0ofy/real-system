import * as React from 'react';

import type { HeadingProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

type DialogHeadingProps = Omit<HeadingProps, 'variant'>;

const DialogHeading = (props: DialogHeadingProps) => (
  <Text.Heading
    as="h3"
    marginBottom={0}
    data-testid={makeTestId('modal-heading')}
    {...props}
  />
);

export type { DialogHeadingProps };
export { DialogHeading };
