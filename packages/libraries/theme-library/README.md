<h1 align="center">@real-system/theme-library</h1>
<p align="center">Real System's theming components and helpers.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/theme-library"><img src="https://badgen.net/npm/v/@real-system/theme-library?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/theme-library"><img src="https://badgen.net/bundlephobia/min/@real-system/theme-library" alt="minified size" height="18"/></a>
</p>

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styling-library react react-dom
# yarn
$ yarn add @real-system/styling-library react react-dom

# install theme

# npm
$ npm install --save @real-system/theme-library
# yarn
$ yarn add @real-system/theme-library
```

### Code Example

```jsx
import { ThemeProvider, useToken } from '@real-system/theme-library';

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
