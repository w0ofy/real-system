# `@realsystem/icon`

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @realsystem/styling @realsystem/theme @realsystem/box react react-dom
# yarn
$ yarn add @realsystem/styling @realsystem/theme @realsystem/box react react-dom

# install icon

# npm
$ npm install --save @realsystem/icon
# yarn
$ yarn add @realsystem/icon
```

### Code Example

```jsx
import { ThemeProvider } from '@realsystem/theme`;
import { Button } from '@realsystem/icon`;

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  );
};
```
