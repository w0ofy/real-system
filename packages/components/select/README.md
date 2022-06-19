<h1 align="center">@real-system/select</h1>
<p align="center">Select component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/select"><img src="https://badgen.net/npm/v/@real-system/select?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/ariakit-library @real-system/elements-primitive @real-system/styled-library @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/ariakit-library @real-system/elements-primitive @real-system/styled-library @real-system/utils-library

# install select

# npm
$ npm install @real-system/select
# yarn
$ yarn add @real-system/select
```

### Code Example

```jsx
import {
  Select,
  SelectContainer,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
} from '@real-system/select';

const DefaultSelect = (args) => {
  return (
    <SelectContainer {...args} disabled>
      <Label>Select a fruit</Label>
      <Select maxW="20rem">
        <SelectItem value="Apple" />
        <SelectItem value="Grape" disabled />
        <SelectItem value="Melon" />
      </Select>
    </SelectContainer>
  );
};

const SelctGroupExample = (args) => {
  return (
    <SelectContainer>
      <Label>Select Groups</Label>
      <Select maxW="20rem">
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="Apple" />
          <SelectItem value="Grape" disabled />
          <SelectItem value="Melon" />
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Vegatables</SelectGroupLabel>
          <SelectItem value="Lettuce" />
          <SelectItem value="Pepper" disabled />
          <SelectItem value="Onion" />
        </SelectGroup>
      </Select>
    </SelectContainer>
  );
};

```
