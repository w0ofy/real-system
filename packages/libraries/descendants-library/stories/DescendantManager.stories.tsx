/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import type { Meta } from '@storybook/react';

import { createDescendantContext } from '@real-system/descendants-library';
import { Flex } from '@real-system/flex';
import { Input as RealInput } from '@real-system/input';
import { Text } from '@real-system/typography';

export default {
  title: 'Libraries/Descendants',
} as Meta;

const [DescendantsProvider, , useDescendants, useDescendant] =
  createDescendantContext<HTMLInputElement, { value?: string }>();

function NumberInput({ children }: { children?: React.ReactNode }) {
  const descendants = useDescendants();

  React.useEffect(() => {
    descendants.first()?.node.focus();
  }, [descendants]);

  return (
    <Flex gap={4}>
      <DescendantsProvider value={descendants}>{children}</DescendantsProvider>
    </Flex>
  );
}

function Input() {
  const [focused, setFocused] = React.useState(false);
  const { register, index, descendants } = useDescendant();

  console.log(register);
  return (
    <RealInput
      width="50px"
      type="number"
      id="real-input"
      textAlign="center"
      placeholder={focused ? '' : '-'}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      ref={register}
      maxLength="1"
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          descendants.next(index)?.node.focus();
        }
        if (event.key === 'ArrowLeft') {
          descendants.prev(index)?.node.focus();
        }
      }}
    />
  );
}

export const WithNumberInput = () => {
  return (
    <>
      <Text.Heading size="h4" mb={12}>
        Use arrow-right and arrow-left to navigate inputs
      </Text.Heading>
      <NumberInput>
        <Input />
        <Input />
        <Input />
      </NumberInput>
    </>
  );
};
