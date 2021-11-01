# `@real-system/theme`

Real System's Theming components and helpers

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styling react react-dom
# yarn
$ yarn add @real-system/styling react react-dom

# install theme

# npm
$ npm install --save @real-system/theme
# yarn
$ yarn add @real-system/theme
```

### Code Example

```jsx
import { ThemeProvider, useToken } from '@real-system/theme`;

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
