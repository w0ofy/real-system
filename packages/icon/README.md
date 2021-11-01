# `@real-system/icon`

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styling @real-system/theme @real-system/box react react-dom
# yarn
$ yarn add @real-system/styling @real-system/theme @real-system/box react react-dom

# install icon

# npm
$ npm install --save @real-system/icon
# yarn
$ yarn add @real-system/icon
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme`;
import { Button } from '@real-system/icon`;

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  );
};
```
