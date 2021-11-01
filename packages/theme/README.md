<h1 align="center">@real-system/theme</h1>
<p align="center">Real System's theming components and helpers.</p>
<p align="center">
<a href="https://badge.fury.io/js/@real-system%2Ftheme"><img src="https://badge.fury.io/js/@real-system%2Ftheme.svg" alt="npm version" height="18"/></a>
</p>

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
import { ThemeProvider, useToken } from '@real-system/theme';

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
