<h1 align="center">@real-system/accordion</h1>
<p align="center">Accordion component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/accordion"><img src="https://badgen.net/npm/v/@real-system/accordion?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/a11y-library @real-system/styled-library @real-system/disclosure @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/a11y-library @real-system/styled-library @real-system/disclosure @real-system/utils-library

# install accordion

# npm
$ npm install @real-system/accordion
# yarn
$ yarn add @real-system/accordion
```

### Code Example

```tsx
import { Accordion } from '@real-system/accordion';
import { Disclosure, DisclosureToggle, DisclosureContent } from '@real-system/disclosure';

const MyComponent = () => {
  return (
    // available props
    <Accordion allowMultiple contained defaultExpanded={{ 1: true, 2: true, 3: true }}>
      <Disclosure>
        <DisclosureToggle>Accordion Item 1</DisclosureToggle>
        <DisclosureContent>Some content to expand and collapse</DisclosureContent>
      </Disclosure>
       <Disclosure>
        <DisclosureToggle>Accordion Item 2</DisclosureToggle>
        <DisclosureContent>Some content to expand and collapse</DisclosureContent>
      </Disclosure>
       <Disclosure>
        <DisclosureToggle>Accordion Item 3</DisclosureToggle>
        <DisclosureContent>Some content to expand and collapse</DisclosureContent>
      </Disclosure>
    </Accordion>
  )
}

```
