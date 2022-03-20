import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta;

const Template = (args) => {
  return (
    <>
      <Text {...args}>
        The quick brown fox jumps over the{' '}
        <Text {...args} inline fontWeight={3}>
          lazy
        </Text>{' '}
        dog.
      </Text>
    </>
  );
};

Template.storyName = 'Text';

export const Default = Template.bind({});

export const Heading = () => (
  <Box display="flex" flexDirection="column">
    <Text.Heading as="h1">Heading 1</Text.Heading>
    <Text.Heading as="h2">Heading 2</Text.Heading>
    <Text.Heading as="h3">Heading 3</Text.Heading>
    <Text.Heading as="h4">Heading 4</Text.Heading>
    <Text.Heading as="h5">Heading 5</Text.Heading>
    <Text.Heading as="h6">Heading 6</Text.Heading>
  </Box>
);

export const Label = () => (
  <Box display="flex" flexDirection="column">
    <Text.Label>Label</Text.Label>
    <Text.Label disabled>Disabled Label</Text.Label>
    <Text.Label required>Required Label</Text.Label>
    <Text.Label required disabled>
      Disabled Required Label
    </Text.Label>
  </Box>
);

export const HelpText = () => (
  <Box display="flex" flexDirection="column">
    <Text.HelpText id="help-text">Help text</Text.HelpText>
    <Text.HelpText id="help-text-danger" intent="danger">
      Danger help text
    </Text.HelpText>
    <Text.HelpText
      id="help-text-error"
      intent="danger"
      errorText="Error help text">
      Danger help text
    </Text.HelpText>
    <Text.HelpText
      id="help-text-error-without-icon"
      errorText="Error help text without icon"
      hideErrorIcon
    />
  </Box>
);
