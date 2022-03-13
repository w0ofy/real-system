<h1 align="center">@real-system/theme-library</h1>
<p align="center">Real System's theming components and helpers.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/theme-library"><img src="https://badgen.net/npm/v/@real-system/theme-library?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
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
import { ThemeProvider, useTokens } from '@real-system/theme-library';

const OtherComponent = () => {
  const [bgColor, textColor] = useToken({
    colors: 'white',
    colors: 'gray-500'
  });
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>...</div>
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
