import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import { Button } from '@real-system/button';
import { Icon, ICONS_LIST } from '@real-system/icon';
import { Heading } from '@real-system/typography';
import { capitalize } from '@real-system/utils';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    trailingIcon: { control: { type: 'select', options: ICONS_LIST } },
    leadingIcon: { control: { type: 'select', options: ICONS_LIST } },
    loading: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
  },
} as Meta;

const Container = (props) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width="100%"
    {...props}
  />
);

const Row = (props) => (
  <Box
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    width="100%"
    mb={10}
    {...props}
  />
);

const ShowcaseTemplate = (args) => (
  <Box display="flex" flexDirection="column" mr={10}>
    <Heading as="h2" variant="heading2">
      {capitalize(args.variant)} {args.size ? capitalize(args.size) : ''}
    </Heading>
    <Row>
      <Button {...args} />
      <Button {...args} trailingIcon={<Icon icon="download" />} />
      <Button {...args} leadingIcon={<Icon icon="download" />} />
      <Button {...args}>
        <Icon icon="download" />
      </Button>
    </Row>
    {args.variant !== 'text' && (
      <Row>
        <Button {...args} disabled />
        <Button {...args} disabled trailingIcon={<Icon icon="download" />} />
        <Button {...args} disabled leadingIcon={<Icon icon="download" />} />
        <Button {...args} disabled>
          <Icon icon="download" />
        </Button>
      </Row>
    )}
    <Row>
      <Button {...args} intent="primary" />
      <Button {...args} intent="primary" trailingIcon={<Icon icon="cog" />} />
      <Button {...args} intent="primary" leadingIcon={<Icon icon="cog" />} />
      <Button {...args} intent="primary">
        <Icon icon="cog" />
      </Button>
    </Row>
    {args.variant !== 'text' && (
      <Row>
        <Button {...args} intent="primary" disabled />
        <Button
          {...args}
          disabled
          intent="primary"
          trailingIcon={<Icon icon="cog" />}
        />
        <Button
          {...args}
          disabled
          intent="primary"
          leadingIcon={<Icon icon="cog" />}
        />
        <Button {...args} intent="primary" disabled>
          <Icon icon="cog" />
        </Button>
      </Row>
    )}
    <Row>
      <Button {...args} intent="danger" />
      <Button {...args} intent="danger" trailingIcon={<Icon icon="trash" />} />
      <Button {...args} intent="danger" leadingIcon={<Icon icon="trash" />} />
      <Button {...args} intent="danger">
        <Icon icon="trash" />
      </Button>
    </Row>
    {args.variant !== 'text' && (
      <Row>
        <Button {...args} intent="danger" disabled />
        <Button
          {...args}
          intent="danger"
          trailingIcon={<Icon icon="trash" />}
          disabled
        />
        <Button
          {...args}
          intent="danger"
          leadingIcon={<Icon icon="trash" />}
          disabled
        />
        <Button {...args} intent="danger" disabled>
          <Icon icon="trash" />
        </Button>
      </Row>
    )}
  </Box>
);

ShowcaseTemplate.defaultProps = {
  children: 'Button',
  mr: 10,
};

export const DefaultButton = (args) => (
  <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
    <ShowcaseTemplate {...args} />
  </Container>
);

export const PrimaryButton = (args) => (
  <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
    <ShowcaseTemplate {...args} variant="primary" />
  </Container>
);

export const MinimalButton = (args) => {
  return (
    <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
      <ShowcaseTemplate {...args} variant="minimal" />
    </Container>
  );
};

export const FloatingButton = ({ icon, ...args }) => (
  <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
    <ShowcaseTemplate {...args} variant="floating" />
  </Container>
);

export const IconButton = ({ icon, ...args }) => (
  <Container>
    <Row>
      <Button {...args}>
        <Icon icon={icon || 'cog'} />
      </Button>
    </Row>
  </Container>
);

IconButton.argTypes = {
  icon: { control: { type: 'select', options: ICONS_LIST } },
};
