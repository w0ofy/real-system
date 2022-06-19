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
import {
  Disclosure,
  DisclosureToggle,
  DisclosureContent,
  DisclosureTrigger,
  DisclosureHeading
} from '@real-system/disclosure';
import { Icon } from '@real-system/icon';
const DefaultDisclosure = () => {
  return (
    <Disclosure>
      <DisclosureToggle>Accordion Item 1</DisclosureToggle>
      <DisclosureContent>Some content to expand and collapse</DisclosureContent>
    </Disclosure>
  )
}

const ContainedDisclosure = () => {
  return (
    <Disclosure contained>
      <DisclosureToggle>Accordion Item 1</DisclosureToggle>
      <DisclosureContent>Some content to expand and collapse</DisclosureContent>
    </Disclosure>
  )
}

const CustomHeadingDisclosure = () => {
  return (
    <Disclosure contained hideToggleIcon>
      {({ visible }) => (
        <DisclosureHeading>
        <Icon icon={visible ? 'arrow-down' : 'arrow-right'} mr={4}>
        <DisclosureTrigger>Accordion Item 1</DisclosureTrigger>
      </DisclosureHeading>
      <DisclosureContent>Some content to expand and collapse</DisclosureContent>
      )}
    </Disclosure>
  )
}
```
