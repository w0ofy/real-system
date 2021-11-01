# `@realsystem/theme`

Real System's Theming components and helpers

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @realsystem/styling react react-dom
# yarn
$ yarn add @realsystem/styling react react-dom

# install theme

# npm
$ npm install --save @realsystem/theme
# yarn
$ yarn add @realsystem/theme
```

### Code Example

```jsx
import { ThemeProvider, useToken } from '@realsystem/theme`;

const OtherComponent = () => {
  const token = useToken('color-background');
  return (
    <div style={{ backgroundColor: token }}>...</div>
  );
};

const MyComponent = () => {
  return (
    <ThemeProvider>
      <OtherComponent />
    </ThemeProvider>
  );
};

```
