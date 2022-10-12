<h1 align="center">@real-system/disclosure</h1>
<p align="center">Disclosure components for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/disclosure"><img src="https://badgen.net/npm/v/@real-system/disclosure?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/utils-library @real-system/disclosure-primitive @real-system/styled-library @real-system/elements-primitive
# yarn
$ yarn add react react-dom @real-system/utils-library @real-system/disclosure-primitive @real-system/styled-library @real-system/elements-primitive

# install disclosure

# npm
$ npm install @real-system/disclosure
# yarn
$ yarn add @real-system/disclosure
```

### Code Example

```tsx
import { Disclosure } from '@real-system/disclosure';
import { Icon } from '@real-system/icon';
const DefaultDisclosure = () => {
  return (
    <Disclosure>
      <Disclosure.Toggle>Accordion Item 1</Disclosure.Toggle>
      <Disclosure.Content>Some content to expand and collapse</Disclosure.Content>
    </Disclosure>
  )
}

const ContainedDisclosure = () => {
  return (
    <Disclosure contained>
      <Disclosure.Toggle>Accordion Item 1</Disclosure.Toggle>
      <Disclosure.Content>Some content to expand and collapse</Disclosure.Content>
    </Disclosure>
  )
}

const CustomHeadingDisclosure = () => {
  return (
    <Disclosure contained>
      {({ visible }) => (
        <Disclosure.Trigger hideToggleIcon>
          <Icon icon={visible ? 'arrow-down' : 'arrow-right'} mr={4} />
          <Disclosure.Heading>Accordion Item 1</Disclosure.Heading>
        </Disclosure.Trigger>
        <Disclosure.Content>Some content to expand and collapse</Disclosure.Content>
      )}
    </Disclosure>
  )
}
```
