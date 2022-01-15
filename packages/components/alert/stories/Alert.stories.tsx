import React from 'react';
import { Meta } from '@storybook/react';

import { Alert, InlineAlert as RealInlineAlert } from '@real-system/alert';
import { Box } from '@real-system/box-primitive';
import { Typography } from '@real-system/typography';

export default {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { InlineAlert: RealInlineAlert },
  args: {
    title: 'There are over 200 integrations available',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
} as Meta;

export const Showcase = (args) => (
  <>
    <Alert {...args} onDismiss={undefined} intent="info" mb={8} />
    <Alert {...args} onDismiss={undefined} intent="success" mb={8} />
    <Alert {...args} onDismiss={undefined} intent="warning" mb={8} />
    <Alert {...args} onDismiss={undefined} intent="danger" mb={8} />
    <RealInlineAlert {...args} intent="info" mb={8}>
      There are over 5000 integrations available
    </RealInlineAlert>
    <RealInlineAlert {...args} intent="success" mb={8}>
      There are over 5000 integrations available
    </RealInlineAlert>
    <RealInlineAlert {...args} intent="warning" mb={8}>
      There are over 5000 integrations available
    </RealInlineAlert>
    <RealInlineAlert {...args} intent="danger" mb={8}>
      There are over 5000 integrations available
    </RealInlineAlert>
  </>
);

export const Default = (args) => <Alert {...args} onDismiss={undefined} />;

export const DismissableAlert = (args) => (
  <Alert {...args} onDismiss={() => window.alert('Alert dismissed.')} />
);

export const InlineAlert = (args) => (
  <Box width="40rem">
    <Typography.Heading variant="heading4">Short text</Typography.Heading>
    <RealInlineAlert {...args} mb={8}>
      There are over 5000 integrations available
    </RealInlineAlert>
    <Typography.Heading variant="heading4">Long text</Typography.Heading>
    <RealInlineAlert {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </RealInlineAlert>
  </Box>
);
