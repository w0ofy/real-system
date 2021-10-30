import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';
import { Button } from '@realsystem/button';
import { Icon, ICONS } from '@realsystem/icon';
import { Heading } from '@realsystem/typography';
import { capitalize } from '@realsystem/utils';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    trailingIcon: { control: { type: 'select', options: ICONS } },
    leadingIcon: { control: { type: 'select', options: ICONS } },
  },
  args: {
    children: 'Button',
    variant: 'primary',
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
      <Button {...args} trailingIcon={<Icon icon="Download" />} />
      <Button {...args} leadingIcon={<Icon icon="Download" />} />
      <Button {...args}>
        <Icon icon="Download" />
      </Button>
    </Row>
    <Row>
      <Button {...args} disabled />
      <Button {...args} disabled trailingIcon={<Icon icon="Download" />} />
      <Button {...args} disabled leadingIcon={<Icon icon="Download" />} />
      <Button {...args} disabled>
        <Icon icon="Download" />
      </Button>
    </Row>
    <Row>
      <Button {...args} intent="neutral" />
      <Button
        {...args}
        intent="neutral"
        trailingIcon={<Icon icon="Settings" />}
      />
      <Button
        {...args}
        intent="neutral"
        leadingIcon={<Icon icon="Settings" />}
      />
      <Button {...args} intent="neutral">
        <Icon icon="Settings" />
      </Button>
    </Row>
    <Row>
      <Button {...args} intent="neutral" disabled />
      <Button
        {...args}
        disabled
        intent="neutral"
        trailingIcon={<Icon icon="Settings" />}
      />
      <Button
        {...args}
        disabled
        intent="neutral"
        leadingIcon={<Icon icon="Settings" />}
      />
      <Button {...args} intent="neutral" disabled>
        <Icon icon="Settings" />
      </Button>
    </Row>
    <Row>
      <Button {...args} intent="danger" />
      <Button {...args} intent="danger" trailingIcon={<Icon icon="Trash2" />} />
      <Button {...args} intent="danger" leadingIcon={<Icon icon="Trash2" />} />
      <Button {...args} intent="danger">
        <Icon icon="Trash2" />
      </Button>
    </Row>
    <Row>
      <Button {...args} intent="danger" disabled />
      <Button
        {...args}
        intent="danger"
        trailingIcon={<Icon icon="Trash2" />}
        disabled
      />
      <Button
        {...args}
        intent="danger"
        leadingIcon={<Icon icon="Trash2" />}
        disabled
      />
      <Button {...args} intent="danger" disabled>
        <Icon icon="Trash2" />
      </Button>
    </Row>
  </Box>
);

ShowcaseTemplate.defaultProps = {
  children: 'Button',
  mr: 10,
};

export const Showcase = (args) => (
  <Container flexDirection="row" flexWrap="wrap">
    <ShowcaseTemplate variant="primary" />
    <ShowcaseTemplate variant="secondary" />
    <ShowcaseTemplate variant="ghost" />
    <ShowcaseTemplate variant="primary" size="small" />
    <ShowcaseTemplate variant="secondary" size="small" />
    <ShowcaseTemplate variant="ghost" size="small" />
  </Container>
);

export const Primary = (args) => (
  <Container>
    <Row>
      <Button {...args} mr={10}>
        {args.intent ? capitalize(args.intent) : 'Primary'} Button
      </Button>
    </Row>
  </Container>
);

export const PrimarySmall = (args) => (
  <Container>
    <Row>
      <Button {...args} size="small">
        {args.intent ? capitalize(args.intent) : 'Small'} Button
      </Button>
    </Row>
  </Container>
);

export const Secondary = (args) => (
  <Container>
    <Row>
      <Button variant="secondary">
        {args.intent ? capitalize(args.intent) : 'Secondary'} Button
      </Button>
    </Row>
  </Container>
);

export const SecondarySmall = (args) => (
  <Container>
    <Row>
      <Button {...args} variant="secondary" size="small">
        {args.intent ? capitalize(args.intent) : 'Small'} Button
      </Button>
    </Row>
  </Container>
);

export const Ghost = (args) => {
  return (
    <Container>
      <Row>
        <Button {...args} variant="ghost">
          {args.intent ? capitalize(args.intent) : 'Ghost'} Button
        </Button>
      </Row>
    </Container>
  );
};

export const GhostSmall = (args) => {
  return (
    <Container>
      <Row>
        <Button {...args} variant="ghost" size="small">
          {args.intent ? capitalize(args.intent) : 'Small'} Button
        </Button>
      </Row>
    </Container>
  );
};

export const IconButton = ({ icon, ...args }) => (
  <Container>
    <Row>
      <Button {...args}>
        <Icon icon={icon || 'Settings'} />
      </Button>
    </Row>
  </Container>
);

IconButton.argTypes = {
  icon: { control: { type: 'select', options: ICONS } },
};
