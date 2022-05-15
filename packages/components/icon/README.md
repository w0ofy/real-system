<h1 align="center">@real-system/icon</h1>
<p align="center">Real System's Icon component.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/icon"><img src="https://badgen.net/npm/v/@real-system/icon?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styling-library @real-system/theme-library @real-system/elements-primitive react react-dom
# yarn
$ yarn add @real-system/styling-library @real-system/theme-library @real-system/elements-primitive react react-dom

# install icon

# npm
$ npm install --save @real-system/icon
# yarn
$ yarn add @real-system/icon
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme-library';
import { Button } from '@real-system/icon';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  );
};
```
