<h1 align="center">@real-system/stack</h1>
<p align="center">Stack component that distributes layouts for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/stack"><img src="https://badgen.net/npm/v/@real-system/stack?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/elements-primitive @real-system/styled-library @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/elements-primitive @real-system/styled-library @real-system/utils-library

# install stack

# npm
$ npm install @real-system/stack
# yarn
$ yarn add @real-system/stack
```

### Code Example

```jsx
import { Stack, StackItem, StackSeparator } from '@real-system/stack';
import { Separator } from '@real-system/separator'; // <-- `yarn add @real-system/separator`

const MyComponent = () => {
  return (
    <>
      Vertical Stack Approaches
      <Stack separator={<StackSeparator />}>
        <Stack.Item>Vertical<Stack.Item>
        <StackItem>Stack<StackItem>
      </Stack>
      Will align-center that stack items
      <Stack.Vertical>...</Stack.Vertical>

      Horizontal Stack Approaches
      <Stack inline>Horizontal Stack</Stack>
      <Stack direction="row">...</Stack>
      <Stack.Horizontal>...</Stack.Horizontal>

      Custom Separator
      Will align-center that stack items
      <Stack separator={<Separator borderColor="red-200" />}>Custom Separator</Stack>
    </>
  )
}

```
