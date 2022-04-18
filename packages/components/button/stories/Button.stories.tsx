/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Button, ButtonProps } from '@real-system/button';
import { Icon, ICONS_LIST } from '@real-system/icon';
import { Heading } from '@real-system/typography';
import { capitalize } from '@real-system/utils-library';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    trailingIcon: { control: { type: 'select', options: ICONS_LIST } },
    leadingIcon: { control: { type: 'select', options: ICONS_LIST } },
    loading: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    children: 'Button',
    variant: 'outline',
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
    marginBottom={10}
    {...props}
  />
);

const ShowcaseTemplate = (args: ButtonProps) => (
  <Box display="flex" flexDirection="column" marginRight={10}>
    <Heading as="h2">
      {capitalize(args.variant!)} {args.size ? capitalize(args.size!) : ''}
    </Heading>
    {/** gray  buttons */}
    <Row>
      <Button {...args} />
      <Button {...args} trailingIcon={<Icon icon="cog" />} />
      <Button {...args} leadingIcon={<Icon icon="cog" />} />
      <Button {...args}>
        <Icon icon="download" />
      </Button>
    </Row>
    <Row>
      <Button {...args} disabled />
      <Button {...args} disabled trailingIcon={<Icon icon="cog" />} />
      <Button {...args} disabled leadingIcon={<Icon icon="cog" />} />
      <Button {...args} disabled>
        <Icon icon="download" />
      </Button>
    </Row>
    {/** purple buttons */}
    <Row>
      <Button {...args} colorScheme="purple" />
      <Button
        {...args}
        colorScheme="purple"
        trailingIcon={<Icon icon="login" />}
      />
      <Button
        {...args}
        colorScheme="purple"
        leadingIcon={<Icon icon="login" />}
      />
      <Button {...args} colorScheme="purple">
        <Icon icon="login" />
      </Button>
    </Row>
    <Row>
      <Button {...args} colorScheme="purple" disabled />
      <Button
        {...args}
        disabled
        colorScheme="purple"
        trailingIcon={<Icon icon="login" />}
      />
      <Button
        {...args}
        disabled
        colorScheme="purple"
        leadingIcon={<Icon icon="login" />}
      />
      <Button {...args} colorScheme="purple" disabled>
        <Icon icon="login" />
      </Button>
    </Row>
    {/** blue buttons */}
    <Row>
      <Button {...args} colorScheme="blue" />
      <Button
        {...args}
        colorScheme="blue"
        trailingIcon={<Icon icon="login" />}
      />
      <Button
        {...args}
        colorScheme="blue"
        leadingIcon={<Icon icon="login" />}
      />
      <Button {...args} colorScheme="blue">
        <Icon icon="login" />
      </Button>
    </Row>
    <Row>
      <Button {...args} colorScheme="blue" disabled />
      <Button
        {...args}
        disabled
        colorScheme="blue"
        trailingIcon={<Icon icon="login" />}
      />
      <Button
        {...args}
        disabled
        colorScheme="blue"
        leadingIcon={<Icon icon="login" />}
      />
      <Button {...args} colorScheme="blue" disabled>
        <Icon icon="login" />
      </Button>
    </Row>
    {/** green buttons */}
    <Row>
      <Button {...args} colorScheme="green" />
      <Button
        {...args}
        colorScheme="green"
        trailingIcon={<Icon icon="save" />}
      />
      <Button
        {...args}
        colorScheme="green"
        leadingIcon={<Icon icon="save" />}
      />
      <Button {...args} colorScheme="green">
        <Icon icon="save" />
      </Button>
    </Row>
    <Row>
      <Button {...args} colorScheme="green" disabled />
      <Button
        {...args}
        colorScheme="green"
        trailingIcon={<Icon icon="save" />}
        disabled
      />
      <Button
        {...args}
        colorScheme="green"
        leadingIcon={<Icon icon="save" />}
        disabled
      />
      <Button {...args} colorScheme="green" disabled>
        <Icon icon="save" />
      </Button>
    </Row>
    {/** red buttons */}
    <Row>
      <Button {...args} colorScheme="red" />
      <Button
        {...args}
        colorScheme="red"
        trailingIcon={<Icon icon="trash" />}
      />
      <Button {...args} colorScheme="red" leadingIcon={<Icon icon="trash" />} />
      <Button {...args} colorScheme="red">
        <Icon icon="trash" />
      </Button>
    </Row>
    <Row>
      <Button {...args} colorScheme="red" disabled />
      <Button
        {...args}
        colorScheme="red"
        trailingIcon={<Icon icon="trash" />}
        disabled
      />
      <Button
        {...args}
        colorScheme="red"
        leadingIcon={<Icon icon="trash" />}
        disabled
      />
      <Button {...args} colorScheme="red" disabled>
        <Icon icon="trash" />
      </Button>
    </Row>
    {/** orange buttons */}
    <Row>
      <Button {...args} colorScheme="orange" />
      <Button
        {...args}
        colorScheme="orange"
        trailingIcon={<Icon icon="trash" />}
      />
      <Button
        {...args}
        colorScheme="orange"
        leadingIcon={<Icon icon="trash" />}
      />
      <Button {...args} colorScheme="orange">
        <Icon icon="trash" />
      </Button>
    </Row>
    <Row>
      <Button {...args} colorScheme="orange" disabled />
      <Button
        {...args}
        colorScheme="orange"
        trailingIcon={<Icon icon="trash" />}
        disabled
      />
      <Button
        {...args}
        colorScheme="orange"
        leadingIcon={<Icon icon="trash" />}
        disabled
      />
      <Button {...args} colorScheme="orange" disabled>
        <Icon icon="trash" />
      </Button>
    </Row>
  </Box>
);

ShowcaseTemplate.defaultProps = {
  children: 'Button',
  variant: 'outline',
  marginRight: 10,
};

export const OutlineButton = (args) => (
  <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
    <ShowcaseTemplate {...args} />
  </Container>
);

export const FillButton = (args) => (
  <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
    <ShowcaseTemplate {...args} variant="fill" />
  </Container>
);

export const MinimalButton = (args) => {
  return (
    <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
      <ShowcaseTemplate {...args} variant="minimal" />
    </Container>
  );
};

export const FloatingButton = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  leadingIcon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trailingIcon,
  ...args
}: ButtonProps) => (
  <Container flexDirection="row" flexWrap="wrap" alignItems="flex-start">
    <ShowcaseTemplate {...args} variant="floating" />
  </Container>
);

export const IconButton = (args) => (
  <Container>
    <Row>
      <Button {...args}>
        <Icon icon={'cog'} />
      </Button>
    </Row>
  </Container>
);

IconButton.argTypes = {
  icon: { control: { type: 'select', options: ICONS_LIST } },
};
